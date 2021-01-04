import Logger from "./core/lib/Logger";

new Logger().error('message error', new Error('fatal error...'))
new Logger().warn('message warn')
new Logger().info('message info')
new Logger().debug('message debug')
new Logger().trace('message trace')