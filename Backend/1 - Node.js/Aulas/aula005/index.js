const os = require('node:os');

const platform = os.platform();
console.log(`OS Platform: ${platform}`);

const arch = os.arch();
console.log(`OS Architeture: ${arch}`);

const cpus = os.cpus();
console.log(`CPU Info:`, cpus);

const memory = os.totalmem();
console.log(`Memory total: ${Math.round(memory / 1024 / 1024 / 1024)} gb`);

const freemem = os.freemem();
console.log(`Free mem: ${Math.round(freemem / 1024 / 1024 / 1024)} gb`);