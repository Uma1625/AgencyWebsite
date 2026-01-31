const fs = require('fs');
const path = require('path');

// Find all CSS files in src
function findCssFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory() && item !== 'node_modules') {
            files.push(...findCssFiles(fullPath));
        } else if (item.endsWith('.css')) {
            files.push(fullPath);
        }
    }

    return files;
}

const cssFiles = findCssFiles('./src');

let totalChanges = 0;

for (const file of cssFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Restore dark blue backgrounds
    content = content.replace(/background:\s*transparent;/g, 'background: #020617;');
    content = content.replace(/background-color:\s*transparent;/g, 'background-color: #020617;');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Restored: ${file}`);
        totalChanges++;
    }
}

console.log(`\nTotal files restored: ${totalChanges}`);
