const { defaultLogger } = require('../helpers/index');

module.exports = function () {
    process.on('uncaughtException', (ex) => {
        defaultLogger.error(ex.message, ex);
    });
    process.on('unhandledRejection', (ex) => {
        throw ex;
    });
}