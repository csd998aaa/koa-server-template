var loginBox = document.getElementById('js-login-box')
var userinfoBox = document.getElementById('js-userinfo-box')
var nicknameBox = document.getElementById('js-nickname-box')

window.onload = function () {
    var userinfo = localStorage.getItem('user')
    if(userinfo) {
        // loginBox.style.display = "none"
        // userinfoBox.style.display = "flex"
        nicknameBox.innerHTML = JSON.parse(userinfo).nickname
    }
}

// 扩展LocalStorage
Storage.prototype.setExpire = (key, value, expire) => {
	let obj = {
	data: value,
	time: Date.now(),
	expire: expire
	};
	//localStorage 设置的值不能为对象,转为json字符串
	localStorage.setItem(key, JSON.stringify(obj));
}

Storage.prototype.getExpire = key => {
    let val = localStorage.getItem(key);
    if (!val) {
        return val;
    }
    val = JSON.parse(val);
    if (Date.now() - val.time > val.expire) {
        localStorage.removeItem(key);
        return null;
    }
    return val.data;
}


// 配置axios
axios.interceptors.request.use(function (config) {    // 这里的config包含每次请求的内容
    let token = localStorage.getItem("token")
    if (config.url.match(/^\/auth/)) {
        return config
    }
    if (token) {
        config.headers.Authorization = 'Bearer ' + `${token}`;
    } else {
        return Promise.reject({
            code: -1,
            message: '请先登录',
        })
    }
    return config;
}, function (err) {
    return Promise.reject(err);
})

// MARK: 执行搜索
var searchBtn = document.getElementById('js-search-btn')
searchBtn.onclick = function () {
    var searchInput = document.getElementById('js-search-input')
    console.log(searchInput.value)

    axios.get('/api/v1/search', {
        params: {
            keyword: searchInput.value
        }
    }).then(res => {
        console.log(res)
        if (res.data.code == 200) {
            layui.use('table', function () {
                var table = layui.table
                table.render({
                    elem: '#js-result',
                    data: res.data.data,
                    // width: 1000,
                    // page: true, //开启分页
                    text: "暂无收录",
                    cols: [[ //表头
                        , { field: 'id', title: '序号',width: 60}
                        , { field: 'question', title: '问题',width: "40%"}
                        , { field: 'answer', title: '答案', width: "40%"}
                        , { field: 'source', title: '来源课本', width: "14%"}
                    ]]

                })
            })
        } else {
            layui.use('layer', function () {
                var layer = layui.layer
                layer.msg(res.data.msg)
            })
        }

    }).catch(err => {
        if (err.code == -1) {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.msg('请先登录');
                loginBox.style.display = "block"
                userinfoBox.style.display = "none"
            });
        } else {
            console.log(err)
        }
    })
}

// MARK: 执行登录
var loginBtn = document.getElementById('js-login')

loginBtn.onclick = function () {
    layui.use('layer', function () {
        var layer = layui.layer;
        layer.open({
            title: "登录",
            move: false,
            type: 1,
            area: ['340px', '240px'],
            offset: '130px',
            shadeClose: true, //点击遮罩关闭
            btn: ['登录'],
            btnAlign: 'c',
            yes: function (index, layero) {
                var username = document.getElementById('js-username').value
                var password = document.getElementById('js-password').value
                if (username.trim() == '' || password.trim() == '') {
                    layer.msg("请输入账号密码")
                    return
                }
                axios.post("/auth/doLogin", { username, password }).then(res => {
                    if (res.data.code == 200) {
                        localStorage.setItem("token", res.data.token)
                        localStorage.setItem("user", JSON.stringify(res.data.data))
                        loginBox.style.display = "none"
                        userinfoBox.style.display = "flex"
                        nicknameBox.innerHTML = res.data.data.nickname
                        layer.msg("登录成功")
                        layer.close(index)
                    } else {
                        layer.msg(res.data.msg)
                    }
                })
            },
            content: `
            <div class="loginbox">
                <input id="js-username" class="layui-input" type="text" placeholder="账号" />
                <input id="js-password" class="layui-input" type="password" placeholder="密码" />
            </div>
            `,
        });
    });
}

// MARK: 用户注册
var signupBtn = document.getElementById("js-signup")
signupBtn.onclick = function () {
    layui.use('layer', function () {
        var layer = layui.layer;
        layer.open({
            title: "注册",
            move: false,
            type: 1,
            area: ['340px', '300px'],
            offset: '130px',
            shadeClose: true, //点击遮罩关闭
            btn: ['注册'],
            btnAlign: 'c',
            yes: function (index, layero) {
                var username = document.getElementById('js-username').value
                var password = document.getElementById('js-password').value
                var nickname = document.getElementById('js-nickname').value
                if (username.trim() == '' || password.trim() == '' || nickname.trim() == '') {
                    layer.msg("请输入必填项")
                    return
                }
                axios.post("/auth/signup", { username, password,nickname }).then(res => {
                    if (res.data.code == 200) {
                        localStorage.setItem("token", res.data.token)
                        localStorage.setItem("user", JSON.stringify(res.data.data))
                        loginBox.style.display = "none"
                        userinfoBox.style.display = "flex"
                        nicknameBox.innerHTML = res.data.data.nickname
                        layer.msg("登录成功")
                        layer.close(index)
                    } else {
                        layer.msg(res.data.msg)
                    }
                })
            },
            content: `
            <div class="loginbox">
                <input id="js-username" class="layui-input" type="text" placeholder="账号" />
                <input id="js-password" class="layui-input" type="password" placeholder="密码" />
                <input id="js-nickname" class="layui-input" type="text" placeholder="昵称" />

            </div>
            `,
        });
    });
}

function doLogin() {
    
}