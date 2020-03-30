const db = require('./db')

const Topic = db.defineModel('topic', {
    question: {
        type: db.TEXT,
        allowNull: false,
        comment: 'question'
    },
    answer: {
        type: db.TEXT,
        allowNull: true,
        comment: 'question'
    },
    source: {
        type: db.STRING,
        allowNull: true,
        comment: 'source'
    },
    type: {
        type: db.STRING,
        allowNull: true,
        comment: 'topic type'
    }
})

module.exports = Topic