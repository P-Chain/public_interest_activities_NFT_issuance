const Router = require('koa-router');

const user_search = new Router();

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

user_search.get('/', handler);

user_search.post('/', handler);

user_search.delete('/', handler);

user_search.put('/', handler);

user_search.patch('/', handler);

module.exports = user_search;