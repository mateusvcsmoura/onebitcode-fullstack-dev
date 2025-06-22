const getOsInfo = require('./modules/getOsInfo');
const registerLog = require('./modules/registerLog');

setInterval(() => {
    registerLog(getOsInfo());
}, 3000);

