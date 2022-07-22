const Router = require('koa-router');

const nft_issue = new Router();

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

nft_issue.get('/', handler);

nft_issue.post('/', handler);

nft_issue.delete('/', handler);

nft_issue.put('/', handler);

nft_issue.patch('/', handler);

module.exports = nft_issue;