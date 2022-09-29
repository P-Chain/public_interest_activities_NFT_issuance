const MBld = require('models/bloodManage');
const APL = require('models/AchieveProgressLev');

// 봉사시간 갱신 신청 관리issList

exports.viewBldApply = async (ctx) => {
    // 봉사시간 갱신 신청 확인
    var data = await MBld.viewApply();
    ctx.response.body = data;
};

exports.allowBldApply = async (ctx) => {
    // 봉사시간 갱신 신청 수락
    var data = ctx.request.body;
    console.log(data);
    await MBld.allowApply({index:data.index,issNum:data.issNum});
    await APL.BloodUpdate(data.nickname, data.issNum);

    ctx.response.body = data;
};

exports.denyBldApply = async (ctx) => {
    // 봉사시간 갱신 신청 거부
    var data = ctx.request.body;
    await MBld.denyApply(data.index);
    ctx.response.body = data;
};

exports.nowBld = async(ctx)=>{
    var data = ctx.request.body;
    ctx.response.body = await APL.findBloodNum(data.email);

    
}