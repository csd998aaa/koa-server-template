const Topic = require('../model/topic')
const db = require('../model/db')

// MARK: search
const search = async (ctx, next) => {
    try {
        let keyword = ctx.query.keyword
        // use db model
        let resp = await Topic.findAll() // query
        ctx.body = {
            code: 200,
            data: resp,
            msg: `This is public API and query is ${keyword}`,
        }
    } catch (err) {
        console.log(err)
    }
    await next()
}

module.exports = {
    search
}