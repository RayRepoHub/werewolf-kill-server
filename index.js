/*
 * @Author: YangRui
 * @Date: 2026-05-26 21:51:19
 * @LastEditors: YangRui
 * @LastEditTime: 2026-06-06 20:26:18
 * @Description: 请输入
 */
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

module.exports = server