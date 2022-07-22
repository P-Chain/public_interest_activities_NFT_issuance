const Router = require('koa-router');

const ranking = new Router();

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

ranking.get('/', handler);

ranking.post('/', handler);

ranking.delete('/', handler);

ranking.put('/', handler);

ranking.patch('/', handler);

module.exports = ranking;