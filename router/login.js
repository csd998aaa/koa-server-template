const router = require('koa-router')()
const { doLogin, signup } = require('../controller/login')

router.post('/doLogin', doLogin)
router.post('/signup', signup)

module.exports = router