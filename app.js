const Koa = require('koa')
const path = require('path')
const view = require('koa-views')
const static = require('koa-static')
const bodyparser = require('koa-bodyparser')
const koajwt = require('koa-jwt')
const router = require('./router')
const { server } = require('./config')

const app = new Koa()

app.use(view('view', { extension: 'html' }))
app.use(static(path.join(__dirname, './static')))
app.use(bodyparser())

// mysql init
require('./model')

// middleware
app.use(async (ctx, next) => {
    return next().catch(err => {
        if (err.status == 401) {
            ctx.status = 401
            ctx.body = {
                code: 401,
                msg: "No auth"
            }
        } else {
            throw err
        }
    })
})

// jwt
app.use(koajwt({ secret: server.JWTSECRET }).unless({
    path: ["/", /^\/auth/]
}))

app.use(router.routes()).use(router.allowedMethods())

app.listen(server.PORT, err => {
    if (err) throw Error("error:", err)
    console.log(`start server success on ${server.PORT}`)
})