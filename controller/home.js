const homeView = async (ctx, next) => {
    await ctx.render('index')
    await next()
}

module.exports = {
    homeView
}