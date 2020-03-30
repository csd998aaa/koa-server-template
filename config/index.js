let conf = {}

/// MARK: 
/// Tip: default is production
/// You can add more mode and update file package.json "script"
/// eg: env = test , and create file "conf.test.js"
/// ...

try {
    let env = process.env.NODE_ENV || 'development'
    
    if (env == 'development') {
        Object.assign(conf, require('./conf.dev.js'))
    } else {
        Object.assign(conf, require('./conf.default.js'))
    }
    // and so on

} catch (err) {
    console.log('errors', err)
}

module.exports = conf