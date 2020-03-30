const SequelizePool = require('koa-sequelize-pool')
const { database } = require('../config')
// 配置ORM pool
const db = SequelizePool({
    user: database.USERNAME,
    password: database.PASSWORD,
    host: database.HOST,
    database: database.DATABASE,
    port: database.PORT,
    dialect: database.DIALECT,
})

module.exports = db