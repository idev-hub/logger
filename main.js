import {Logger} from "./lib/Logger.js";
const log = new Logger({appName: 'defaultname'})
log.warn('debug', new Error('wran'))