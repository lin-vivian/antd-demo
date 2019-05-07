const proxy = require('http-proxy-middleware');
const express = require('express')
module.exports = function(app) {
    app.use(proxy('/file', { target: 'http://127.0.0.1:4000', changeOrigin: true }));
    app.use('/static', express.static(__dirname + '/constants')); //获取静态资源
}

