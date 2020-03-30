const Topic = require('./topic')
const User = require('./user')

Topic.sync({ force: false })
User.sync({ force: true }).then(() => {
    // default value 
    let defaultUser = ['admin','csd']
    for (let v of defaultUser) {
        User.create({
            username: v,
            password: '888888',
            nickname: v,
        })
    }
})

module.exports = {
    Topic,
    User
}