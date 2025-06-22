const os = require('node:os');

function getOsInfo() {
    const system = os.platform();
    const arch = os.arch();
    const cpu = os.cpus()[0]?.model;
    const uptime = `${os.uptime()} seconds`;
    const memoryUse = `${((os.freemem() / os.totalmem()) * 100).toFixed(2)}%`;

    const sys = { system, arch, cpu, uptime, memoryUse };

    const str = `LOG\n\nOS Platform: ${sys.system}\nOS Architeture: ${sys.arch}\nCPU: ${sys.cpu}\nUptime: ${sys.uptime}\nMemory Use: ${sys.memoryUse}`;

    console.log(str);

    return str;
}

module.exports = getOsInfo;