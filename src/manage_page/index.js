const Router = require('koa-router');

const manage_page = new Router();
const vms = require('./manageVms');
const iss = require('./manageIss');
const nft = require('./manageNft');

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

manage_page.get('/vmsapplys', vms.viewVmsApply);

manage_page.post('/allowapplys', vms.allowVmsApply);

manage_page.post('/denyapplys', vms.denyVmsApply);

manage_page.post('/nowvms', vms.nowVms);

manage_page.get('/issapplys', iss.viewIssApply);

manage_page.post('/allowissapplys', iss.allowIssApply);

manage_page.post('/denyissapplys', iss.denyIssApply);

manage_page.post('/nowiss', iss.nowIss);

manage_page.get('/nftapplys', nft.viewNftApply);

manage_page.post('/allownftapplys', nft.allowNftApply);

manage_page.post('/denynftapplys', nft.denyNftApply);

manage_page.post('/nownft', nft.nowNft);

manage_page.delete('/', handler);

manage_page.put('/', handler);

manage_page.patch('/', handler);

module.exports = manage_page;