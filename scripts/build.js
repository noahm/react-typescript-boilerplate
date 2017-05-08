require('./clean');

const child_process = require('child_process');
const process = require('process');
const path = require('path');

const cmd = path.join("node_modules",".bin","webpack") + " --progress --profile --colors --optimize-minimize";

process.cwd('..');
child_process.execSync(cmd, {
    stdio: 'inherit',
});
