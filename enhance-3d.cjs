const fs = require('fs');
const path = require('path');

// Find all CSS files in src/pages
function findCssFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            files.push(...findCssFiles(fullPath));
        } else if (item.endsWith('.css')) {
            files.push(fullPath);
        }
    }
    return files;
}

const cssFiles = findCssFiles('./src/pages');
let totalChanges = 0;

for (const file of cssFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Increase border-color opacity for arcs (from 0.2-0.4 to 0.5-0.7)
    content = content.replace(/rgba\((220|239|249|34|68|115|22), (38|68|115|22|197|94|165|233|182|212), (38|68|22|94|233|212), 0\.(1|15|2|25|3|35)\)/g,
        (match, r, g, b, opacity) => {
            const newOpacity = (parseFloat('0.' + opacity) + 0.35).toFixed(2);
            return `rgba(${r}, ${g}, ${b}, ${newOpacity})`;
        });

    // Increase glow opacity (from 0.1-0.3 to 0.4-0.6)
    content = content.replace(/filter: blur\(100px\)/g, 'filter: blur(80px)');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Enhanced: ${file}`);
        totalChanges++;
    }
}

console.log(`\nTotal files enhanced: ${totalChanges}`);
