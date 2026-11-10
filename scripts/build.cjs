const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const assets = ['index.html', 'app-v53.html', 'pdf-tools.js'];
for (const asset of assets) {
  const content = fs.readFileSync(path.join(root, asset), 'utf8');
  if (asset.endsWith('.js')) {
    new vm.Script(content, { filename: asset });
  } else {
    for (const match of content.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) {
      if (match[1].trim()) new vm.Script(match[1], { filename: asset });
    }
  }
}
fs.mkdirSync(output, { recursive: true });
for (const asset of assets) fs.copyFileSync(path.join(root, asset), path.join(output, asset));
console.log(`Validated and packaged ${assets.length} web assets in dist/.`);
