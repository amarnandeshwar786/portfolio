const fs = require('node:fs');
const path = require('node:path');

const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const projectName = packageJson.name;
const browserOutDir = path.join(process.cwd(), 'dist', projectName, 'browser');
const indexFile = path.join(browserOutDir, 'index.html');
const notFoundFile = path.join(browserOutDir, '404.html');
const noJekyllFile = path.join(browserOutDir, '.nojekyll');

if (!fs.existsSync(indexFile)) {
  console.error(`Cannot find ${indexFile}. Run the production build first.`);
  process.exit(1);
}

fs.copyFileSync(indexFile, notFoundFile);
fs.writeFileSync(noJekyllFile, '');
console.log('Created 404.html and .nojekyll for GitHub Pages SPA support.');
