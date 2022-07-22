const Router = require('koa-router');

const auth_apply = new Router();

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

auth_apply.get('/', handler);

auth_apply.post('/', handler);

auth_apply.delete('/', handler);

auth_apply.put('/', handler);

auth_apply.patch('/', handler);

module.exports = auth_apply;