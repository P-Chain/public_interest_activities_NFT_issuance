const Joi = require('joi');
const Account = require('models/Account');
const APL = require('models/AchieveProgressLev');
const AT = require('models/Achieve_total');
const PA = require('models/Progressed_achieve');


exports.APLTest1 = async (ctx) =>{
    var ID = 1
    var data = await APL.userRegist(ID);
    console.log('pass');
    ctx.body = 'testing APL';
};
