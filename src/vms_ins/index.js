const Router = require('koa-router');

const vms_ins = new Router();
const vms = require('./vmsIns');

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

vms_ins.get('/count', vms.vmsCount);

vms_ins.post('/vmsapply', vms.vmsInsApply);

vms_ins.delete('/', handler);

vms_ins.put('/', handler);

vms_ins.patch('/', handler);

module.exports = vms_ins;