const os = require('node:os');

function getOsInfo() {
    const OsUptime = os.uptime();

    const days = Math.floor(OsUptime / (60 * 60 * 24));
    const hours = Math.floor((OsUptime % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((OsUptime % (60 * 60)) / 60);
    const seconds = Math.floor(OsUptime % 60);

    // Formata com zero à esquerda
    const pad = (n) => String(n).padStart(2, '0');

    const system = os.platform();
    const arch = os.arch();
    const cpu = os.cpus()[0]?.model;
    const uptime = `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    const memoryUse = `${(((os.totalmem() - os.freemem()) / os.totalmem()) * 100).toFixed(2)}%`;

    const sys = { system, arch, cpu, uptime, memoryUse };

    const str = `LOG\n\nOS Platform: ${sys.system}\nOS Architeture: ${sys.arch}\nCPU: ${sys.cpu}\nUptime: ${sys.uptime}\nMemory Use: ${sys.memoryUse}`;

    console.log(str);

    return str;
}

module.exports = getOsInfo;