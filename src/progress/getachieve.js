const PA = require('models/Progressed_achieve')

// 업적 불러오기

exports.loadachieve = async (ctx) => {
    const { user } = ctx.request;

    if(!user) {
        ctx.status = 403; // Forbidden
        return;
    }
    ctx.body = {profile: user.profile, issuer: user.isIssuer, manager: user.isManager, nickname: user.nickname};
    var data = await PA.findAchieveArray(user.nickname);
    ctx.body = data;
}