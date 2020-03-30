///
/// default production mode
///
module.exports = {
    server: {
        PORT: 3400,
        JWTSECRET: "csd998aaa"
    },
    // db
    database: {
        DATABASE: 'dbname',
        HOST: 'localhost',
        PORT: '3306',
        USERNAME: 'root',
        PASSWORD:'root',
        DIALECT: 'mysql'
    },
    // other conf
    api: {
        BASEURL: "https://funbfe.com",
        TOKEN: "XXXcsd998aaa",
    },
}