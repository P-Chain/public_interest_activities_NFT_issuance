require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

const { jwtMiddleware } = require('lib/token');

mongoose.Promise = global.Promise; // use node native Promise
// connect mongoDB
mongoose.connect(process.env.MONGO_URI, {
    // useMongoClient: true // needed for mongoose version under 5.0.0
}).then(
    (response) => {
        console.log('Sucessfully connected to mongoDB');
        console.log('MONGO_URI is ' + process.env.MONGO_URI);
    }
).catch(e => {
    console.error(e);
});

const port = process.env.PORT || 4000; // 4000 if not defined

/* link part */
const auth_account = require('./auth_account');
const auth_apply = require('./auth_apply');
const log_in = require('./log_in');
const main = require('./main');
const manage_page = require('./manage_page');
const mypage = require('./mypage');
const nft_choice = require('./nft_choice');
const nft_issue = require('./nft_issue');
const ranking = require('./ranking');
const user_search = require('./user_search');
const vms_ins = require('./vms_ins');
const DB_test = require('./DB_Test');
const meta_test = require('./meta_test');

app.use(bodyParser()); // have to be upward of router
app.use(jwtMiddleware); // apply middleware

router.use('/auth_account', auth_account.routes());
router.use('/auth_apply', auth_apply.routes());
router.use('/log_in', log_in.routes());
router.use('/main', main.routes());
router.use('/manage_page', manage_page.routes());
router.use('/mypage', mypage.routes());
router.use('/nft_choice', nft_choice.routes());
router.use('/nft_issue', nft_issue.routes());
router.use('/ranking', ranking.routes());
router.use('/user_search', user_search.routes());
router.use('/vms_ins', vms_ins.routes());
router.use('/DB_test', DB_test.routes());
router.use('/meta_test', meta_test.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('test server is listening to port ' + port);
})