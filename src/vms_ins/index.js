const Router = require('koa-router');

const vms_ins = new Router();
const vms_insCtrl = require('./vms_ins.controller')

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

vms_ins.get('/', handler);

vms_ins.post('/', vms_insCtrl.isValidNum);

vms_ins.delete('/', handler);

vms_ins.put('/', handler);

vms_ins.patch('/', handler);

module.exports = vms_ins;