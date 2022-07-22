const Router = require('koa-router');

const nft_choice = new Router();

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

nft_choice.get('/', handler);

nft_choice.post('/', handler);

nft_choice.delete('/', handler);

nft_choice.put('/', handler);

nft_choice.patch('/', handler);

module.exports = nft_choice;