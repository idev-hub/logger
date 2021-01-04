import * as chalk from 'chalk'
import { DateTime } from 'luxon'

enum ErrorLevels {
    ERROR,
    WARN,
    INFO,
    DEBUG,
    TRACE
}

export default class Logger {
    protected readonly log = console.log

    protected readonly getDateText = (): string => {
        return chalk.blue(DateTime.local().toFormat('dd.MM.yyyy hh:mm:ss'))
    }

    protected readonly getLevelText = (level: ErrorLevels): string => {
        const text = ` ${ ErrorLevels[level] } `

        switch ( level ) {
            case ErrorLevels.ERROR:
                return chalk.white.bgRed.bold(text)
            case ErrorLevels.WARN:
                return chalk.black.bgYellowBright.bold(text)
            case ErrorLevels.INFO:
                return chalk.white.bgBlue.bold(text)
            case ErrorLevels.DEBUG:
                return chalk.white.bgCyan.bold(text)
            default:
                return chalk.black.bgWhite(text)
        }
    }

    protected readonly getConsoleMessage = (message: string, level: ErrorLevels): string => {
        return this.getLevelText(level) + " " + this.getDateText() + " - " + message
    }

    constructor () {

    }

    public readonly error = (message: string | Error, error?: Error) => {
        if ( typeof message !== 'string' && !error ) {
            error = message
            message = error.message
        }

        this.log(this.getConsoleMessage(message.toString(), ErrorLevels.ERROR))
        if ( error ) this.log(error)
    }

    public readonly warn = (message: string | Error, error?: Error) => {
        if ( typeof message !== 'string' && !error ) {
            error = message
            message = error.message
        }

        this.log(this.getConsoleMessage(message.toString(), ErrorLevels.WARN))
        if ( error ) this.log(error)
    }

    public readonly info = (message: string,) => {
        this.log(this.getConsoleMessage(message, ErrorLevels.INFO))
    }

    public readonly debug = (message: string,) => {
        this.log(this.getConsoleMessage(message, ErrorLevels.DEBUG))
    }

    public readonly trace = (message: string,) => {
        this.log(this.getConsoleMessage(message, ErrorLevels.TRACE))
    }
}