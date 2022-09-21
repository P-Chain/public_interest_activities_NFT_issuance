const Router = require('koa-router');

const manage_page = new Router();
const vms = require('./manageVms');

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

manage_page.get('/applys', vms.viewVmsApply);

manage_page.post('/', handler);

manage_page.delete('/', handler);

manage_page.put('/', handler);

manage_page.patch('/', handler);

module.exports = manage_page;