const router = require('koa-router')()
const home = require('./home')
const api = require('./api')
const login = require('./login')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api/v1', api.routes(), api.allowedMethods())
router.use('/auth', login.routes(), login.allowedMethods())

module.exports = router