const User = require("../model/user")
const createToken = require('../util/token')

// MARK: 执行登录
const doLogin = async (ctx, next) => {
    try {
        let username = ctx.request.body.username
        let password = ctx.request.body.password
        let query = await User.findOne({
            where: {
                username,
                password,
            }
        })
        if (query) {
            ctx.body = {
                code: 200,
                msg: '登录成功',
                data: {
                    username: query.username,
                    nickname: query.nickname
                },
                token: createToken({
                    username: query.username,
                    nickname: query.nickname
                })
            }
        } else {
            ctx.body = {
                code: -1,
                msg: "登录失败，请检查账号密码"
            }
        }
    } catch (err) {
        console.log(err)
        ctx.body = "login error"
    }
    await next()
}

// MARK: 注册
const signup = async (ctx,next) => {
    try {
        let username = ctx.request.body.username
        let password = ctx.request.body.password
        let nickname = ctx.request.body.nickname
        if(username.trim().length < 6 || password.trim().length <6) {
            ctx.body = {
                code: -1,
                msg: "账号密码不得少于6位"
            }
            return
        }
        let query = await User.findOne({
            where: {
                username,
            }
        })
        if(query) {
            ctx.body = {
                code: -1,
                msg: "该账号已存在"
            }
        } else {
            await User.create({
                username,
                password,
                nickname,
            })
            ctx.body = {
                code: 200,
                msg: '注册成功，已自动登录',
                data: {
                    username,
                    nickname,
                },
                token: createToken({
                    username,
                    nickname
                })
            }
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    doLogin,
    signup
}