const jwt = require("jsonwebtoken")
const { server } = require("../config")

/**
 * 生成token
 * @param {Object} data 
 * @param {*} expires 
 * @param {*} strTimer 
 */
const createToken = (data) => {
    let token = jwt.sign(data, server.JWTSECRET, {
        expiresIn: "1 days"
    })
    return token
}

module.exports = createToken