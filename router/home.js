const router = require('koa-router')()
const {homeView} = require('../controller/home')

router.get('/', homeView)

module.exports = router