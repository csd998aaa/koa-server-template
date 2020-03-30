const MAIN_FILE = "./app.js"

module.exports = {
    apps: [
        // prod
        {
            name: "prod",
            script: MAIN_FILE,
            env: {
                "NODE_ENV": "production"
            }
        },
        // dev
        {
            name: "dev",
            script: MAIN_FILE,
            env: {
                "NODE_ENV": "development"
            }
        }
    ]
}