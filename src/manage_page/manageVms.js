const MVMS = require('models/vmsManage');
const APL = require('models/AchieveProgressLev');
const PA = require('models/Progressed_achieve');

// 봉사시간 갱신 신청 관리

exports.viewVmsApply = async (ctx) => {
    // 봉사시간 갱신 신청 확인
    var data = await MVMS.viewApply();
    ctx.response.body = data;
};

exports.allowVmsApply = async (ctx) => {
    // 봉사시간 갱신 신청 수락
    var data = ctx.request.body;
    var vs = await APL.findVolTime(data.nickname);
    await MVMS.allowApply({index:data.index,volTime:data.volTime});
    await APL.VolTimeUpdate(data.nickname, data.volTime);
    ctx.response.body = data;
    if(vs<50&&data.volTime>=50){
        await PA.AddProgAchieve(data.nickname, 0, "vol_50", new Date());
    }
    if(vs<100&&data.volTime>=100){
        await PA.AddProgAchieve(data.nickname, 1, "vol_100", new Date());
    }
    if(vs<500&&data.volTime>=500){
        await PA.AddProgAchieve(data.nickname, 2, "vol_500", new Date());
    }
    if(vs<1000&&data.volTime>=1000){
        await PA.AddProgAchieve(data.nickname, 3, "vol_1000", new Date());
    }
};

exports.denyVmsApply = async (ctx) => {
    // 봉사시간 갱신 신청 거부
    var data = ctx.request.body;
    await MVMS.denyApply(data.index);
    ctx.response.body = data;
};

exports.nowVms = async(ctx)=>{
    var data = ctx.request.body;
    ctx.response.body = await APL.findVolTime(data.nickname);
}