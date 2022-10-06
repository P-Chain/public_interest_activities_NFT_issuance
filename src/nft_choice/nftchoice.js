const Account = require('models/Account');

exports.viewIssNft = async (ctx) => {
    // 봉사시간 갱신 신청 확인
    const { user } = ctx.request;

    if(!user) {
        ctx.status = 403; // Forbidden
        return;
    }
    ctx.body = await Account.findIssList(user.email);
    console.log(ctx.body);
};