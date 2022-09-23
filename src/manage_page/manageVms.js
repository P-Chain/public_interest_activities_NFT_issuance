const MVMS = require('models/vmsManage');
const APL = require('models/AchieveProgressLev');

// 봉사시간 갱신 신청 관리

exports.viewVmsApply = async (ctx) => {
    // 봉사시간 갱신 신청 확인
    var data = await MVMS.viewApply();
    ctx.response.body = data;
};

exports.allowVmsApply = async (ctx) => {
    // 봉사시간 갱신 신청 수락
    var data = ctx.request.body;
    await MVMS.allowApply({index:data.index,volTime:data.volTime});
    await APL.VolTimeUpdate(data.nickname, data.volTime);
    ctx.response.body = data;
};

exports.denyVmsApply = async (ctx) => {
    // 봉사시간 갱신 신청 거부
    var data = ctx.request.body;
    await MVMS.denyApply(data.index);
    ctx.response.body = data;
};