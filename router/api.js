const router = require('koa-router')()
const { search } = require('../controller/api')

router.get('/search', search)


module.exports = router