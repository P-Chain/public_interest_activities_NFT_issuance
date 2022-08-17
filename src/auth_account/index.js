const Router = require('koa-router');
const auth_account = new Router();
const authCtrl = require('./auth.controller');

auth_account.post('/register/local', authCtrl.localRegister);
auth_account.post('/login/local', authCtrl.localLogin);
auth_account.get('/exists/:key(email|username)/:value', authCtrl.exists);
auth_account.post('/logout', authCtrl.logout);
auth_account.get('/check', authCtrl.check);

module.exports = auth_account;