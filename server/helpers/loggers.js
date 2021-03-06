const winston = require('winston');
const { format } = winston;
const { combine, timestamp, colorize, prettyPrint } = format;

const transports = {
    console: new winston.transports.Console({ level: 'info', colorize: true}),
    file: new winston.transports.File({ filename: 'logfile.log', level: 'error'}),
    fileInfo: new winston.transports.File({ filename: 'logcombined.log', level: 'info'}),
};

const defaultLogger = winston.createLogger({
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
        transports.console,
        transports.file,
        transports.fileInfo
    ],
});

transports.console.level = 'info';
transports.console.colorize = true;

transports.file.level = 'error';
transports.fileInfo.level = 'info';

module.exports = { defaultLogger }