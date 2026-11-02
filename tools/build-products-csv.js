/* Writes downloads/mesurado-products.csv for the WooCommerce product importer.
   Only dishes marked “orderable online” in data/project.js are included (19 of 23),
   matching the reference prototype. Usage: node tools/build-products-csv.js */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.resolve(__dirname, '..');
const ctx = { window: {} };
ctx.GUIDE = ctx.window.GUIDE = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data', 'project.js'), 'utf8'), ctx);
const P = ctx.GUIDE.project;
const cat = Object.fromEntries(P.menuCats.map(([id, label]) => [id, label]));
const q = (v) => '"' + String(v).replace(/"/g, '""') + '"';
const head = ['Type', 'SKU', 'Name', 'Published', 'Is featured?', 'Visibility in catalog', 'Short description', 'Description', 'In stock?', 'Regular price', 'Categories'];
const rows = P.menu.filter((m) => m[8]).map((m) => [
  'simple', 'MK-' + m[0].toUpperCase(), m[2], 1, P.orderPopular.includes(m[0]) ? 1 : 0, 'visible',
  m[5] + ' · Allergens: ' + m[6], m[4], 1, m[3].toFixed(2), cat[m[1]]
]);
const csv = [head, ...rows].map((r) => r.map(q).join(',')).join('\r\n') + '\r\n';
fs.mkdirSync(path.join(ROOT, 'downloads'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'downloads', 'mesurado-products.csv'), '﻿' + csv);
console.log('Wrote', rows.length, 'products');
