# koa-server-template

Use koa to quickly build the basic template and use it immediately.
Has fast koa-router, user authentication(jwt), ORM（sequelize） , pm2 deploy and so on.
Continually updated...

[中文介绍](https://github.com/csd998aaa/koa-server-template.git/README.zh_CN.md) 

# Dependencies

```JavaScript
"dependencies": {
    "jsonwebtoken": "^8.5.1",
    "koa": "^2.11.0",
    "koa-bodyparser": "^4.3.0",
    "koa-jwt": "^3.6.0",
    "koa-router": "^8.0.8",
    "koa-sequelize-pool": "^1.0.2",
    "koa-static": "^5.0.0",
    "koa-views": "^6.2.1",
    "mysql2": "^2.1.0"
}
```
[koa-sequelize-pool](https://www.npmjs.com/package/koa-sequelize-pool) is a tool based on [sequelize](https://www.npmjs.com/package/sequelize) secondary packaging.
You can visit my repository for more information.

# Usage

```shell
git clone git@github.com:csd998aaa/koa-server-template.git
npm i 

npm run dev # dev 
# or
node app.js # dev 
# or
npm run prod # prod 
```

# Deploy
Project for deployment, please install `pm2`, and use it to monitor the running status of the project

```shell
npm i -g pm2
npm run prod # prod
```


# License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2020-present, csd.
