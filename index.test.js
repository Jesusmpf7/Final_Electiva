const fs = require('fs');
const path = require('path');

test('should have the correct content in index.html', () => {
    const filePath = path.join(__dirname, 'index.html');
    const html = fs.readFileSync(filePath, 'utf-8');
    expect(html).toContain('<h1>Hola Mundo</h1>');
});
