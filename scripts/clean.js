const fs = require('fs-extra');
const path = require('path');

fs.removeSync(path.join(__dirname, 'build'));
console.log('Deleted build folder!');
