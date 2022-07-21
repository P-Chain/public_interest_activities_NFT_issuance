require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

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

app.use(bodyParser()); // have to be upward of router

app.listen(port, () => {
    console.log('test server is listening to port ' + port);
})