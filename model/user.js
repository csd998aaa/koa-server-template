const db = require('./db')

const User = db.defineModel('user', {
    username: {
        type: db.STRING,
        allowNull: false,
        comment: 'username'
    },
    password: {
        type: db.STRING,
        allowNull: false,
        comment: 'password'
    },
    nickname: {
        type: db.STRING,
        allowNull: true,
        comment: 'nickname'
    },
})

module.exports = User