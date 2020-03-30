# koa-server-template
使用koa快速搭建基础模板，拿来即用。
拥有快速路由、用户验证、ORM...
持续更新.

# 依赖项

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
[koa-sequelize-pool](https://www.npmjs.com/package/koa-sequelize-pool) 是基于 [sequelize](https://www.npmjs.com/package/sequelize) 二次封装的工具，你可以访问我的仓库进行了解。

# 使用方法

```shell
git clone git@github.com:csd998aaa/koa-server-template.git
npm i 

npm run dev # dev 
# or
node app.js # dev 
# or
npm run prod # prod 
```
# 部署项目
部署的您的项目，请安装`pm2`，并用它来监视项目的运行状态。

```shell
npm i -g pm2
npm run prod # prod
```


# License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2020-present, csd.

