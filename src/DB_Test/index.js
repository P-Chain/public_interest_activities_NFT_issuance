const Router = require('koa-router');
const DB_test = new Router();
const DbTest = require('./db_test');

DB_test.get('/1', DbTest.APLTest1);


module.exports = DB_test;