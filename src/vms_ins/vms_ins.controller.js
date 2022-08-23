const Joi = require('joi');
const Request = require('request');

// const baseUrl = 'https://www.vms.or.kr/auth/authenticationView.do';
const baseUrl = 'https://www.vms.or.kr/auth/authentication.do';

// 작동하지 않습니다. (수정해야합니다...)
// 실제 있는 인증번호인지 검사
exports.isValidNum = async (ctx) => {
    // process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

    const schema = Joi.object().keys({
        certifyno1: Joi.string().min(8).max(8).required(),
        certifyno2: Joi.string().min(4).max(4).required(),
        certifyno3: Joi.string().min(8).max(8).required(),
    });

    const result = schema.validate(ctx.request.body);

    if(result.error) {
        ctx.status = 400; // bad request
        return;
    }

    console.log();
    const option = {
        uri: baseUrl,
        method: 'POST',
        form: ctx.request.body
    };

    Request.post(option, function(error, response, body) {
        console.log('error : ', error)
        console.log('statusCode :', response && response.statusCode); // Print the response status code if a response was received
        console.log('body :', body); // Print the HTML for the Google homepage.
    });
};