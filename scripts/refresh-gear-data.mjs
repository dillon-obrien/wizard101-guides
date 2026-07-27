/**
 * Refresh public/data/gear.json from WizBuilder's public item API.
 *
 * Usage:  node scripts/refresh-gear-data.mjs
 *
 * Harvests every item page (100 items/page, ~250ms politeness delay),
 * prints a dataset analysis (types, schools, levels, stat keys), then
 * compacts the 8 equipment slots into the short-key schema the Build
 * Planner consumes:
 *   { k: id, n: name, s: school, l: level, t: type,
 *     st: { statKey: value, ... }, set?: string, f: 1 if no-auction }
 *
 * Data courtesy of https://www.wizbuilder.net — keep the politeness
 * delay, and keep the credit line in the Build Planner UI.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---- Harvest ----
const items = [];
let offset = 0;
for (let page = 0; page < 800; page++) {
  const res = await fetch(`https://www.wizbuilder.net/builder/items?offset=${offset}`);
  if (!res.ok) {
    console.error(`HTTP ${res.status} at offset ${offset}`);
    break;
  }
  const j = await res.json();
  const data = j.data || [];
  items.push(...data);
  offset += 100;
  if (page % 20 === 0) console.log(`pages: ${page + 1}, items: ${items.length}`);
  if (!j.meta?.hasMore || data.length === 0) break;
  await sleep(250);
}
console.log("TOTAL items:", items.length);

// ---- Analysis (sanity-check conventions before shipping) ----
const count = (arr) => {
  const m = new Map();
  for (const v of arr) m.set(v, (m.get(v) ?? 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1]);
};
console.log("TYPES:", JSON.stringify(count(items.map((i) => i.type))));
console.log("SCHOOLS:", JSON.stringify(count(items.map((i) => i.school))));
const levels = items.map((i) => i.level).filter((n) => typeof n === "number");
console.log("LEVELS: min", Math.min(...levels), "max", Math.max(...levels));
const statKeys = new Set();
for (const i of items) for (const k of Object.keys(i.stats || {})) statKeys.add(k);
console.log(`STAT KEYS (${statKeys.size}):`, [...statKeys].sort().join(", "));
// If min/max levels or stat keys change, update MIN_LEVEL/MAX_LEVEL and
// STAT_META in src/components/tools/BuildPlanner.tsx to match.

// ---- Compaction ----
const KEEP_TYPES = new Set([
  "Hats", "Robes", "Boots", "Wands", "Athames", "Amulets", "Rings", "Decks",
]);
const seen = new Set();
const compact = [];
for (const i of items) {
  if (!KEEP_TYPES.has(i.type)) continue;
  if (seen.has(i.shareKey)) continue;
  seen.add(i.shareKey);
  const st = {};
  for (const [k, v] of Object.entries(i.stats || {})) if (v) st[k] = v;
  compact.push({
    k: String(i.shareKey).replace(/^item:/, ""),
    n: i.name,
    s: i.school,
    l: i.level ?? 0,
    t: i.type,
    st,
    set: (i.sets && i.sets[0]) || undefined,
    f: (i.flags || []).includes("no_auction") ? 1 : 0,
  });
}
compact.sort((a, b) => a.n.localeCompare(b.n));
mkdirSync(join(root, "public/data"), { recursive: true });
const json = JSON.stringify(compact);
writeFileSync(join(root, "public/data/gear.json"), json);
console.log("WROTE public/data/gear.json —", compact.length, "items,", json.length, "bytes");
console.log("by type:", JSON.stringify(count(compact.map((i) => i.t))));
