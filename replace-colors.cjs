const fs = require('fs');
const path = require('path');

function replaceColorsInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Blue/Indigo to Red replacements
    const replacements = [
        ['99, 102, 241', '220, 38, 38'],
        ['168, 85, 247', '249, 115, 22'],
        ['139, 92, 246', '239, 68, 68'],
        ['147, 51, 234', '220, 38, 38'],
        ['126, 34, 206', '185, 28, 28'],
        ['#6366f1', '#DC2626'],
        ['#6366F1', '#DC2626'],
        ['#8B5CF6', '#EF4444'],
        ['#8b5cf6', '#EF4444'],
        ['#a855f7', '#F97316'],
        ['#A855F7', '#F97316'],
        ['#a78bfa', '#FB923C'],
        ['#A78BFA', '#FB923C'],
        ['#7c3aed', '#DC2626'],
        ['#3b82f6', '#DC2626'],
        ['#60a5fa', '#EF4444'],
        ['#0ea5e9', '#F97316'],
    ];

    let changed = false;
    for (const [from, to] of replacements) {
        if (content.includes(from)) {
            content = content.split(from).join(to);
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (file.endsWith('.css')) {
            replaceColorsInFile(filePath);
        }
    }
}

walkDir('./src');
console.log('Done replacing colors!');
