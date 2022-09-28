const Router = require('koa-router');

const manage_page = new Router();
const vms = require('./manageVms');

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

manage_page.get('/vmsapplys', vms.viewVmsApply);

manage_page.post('/allowapplys', vms.allowVmsApply);

manage_page.post('/denyapplys', vms.denyVmsApply);

manage_page.post('/nowvms', vms.nowVms);

manage_page.delete('/', handler);

manage_page.put('/', handler);

manage_page.patch('/', handler);

module.exports = manage_page;