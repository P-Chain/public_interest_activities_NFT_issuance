const MBld = require('models/bloodManage');
const APL = require('models/AchieveProgressLev');
const PA = require('models/Progressed_achieve');

// 봉사시간 갱신 신청 관리issList

exports.viewBldApply = async (ctx) => {
    // 봉사시간 갱신 신청 확인
    var data = await MBld.viewApply();
    ctx.response.body = data;
};

exports.allowBldApply = async (ctx) => {
    // 봉사시간 갱신 신청 수락
    var data = ctx.request.body;
    var bl =  await APL.findBloodNum(data.email);
    console.log(data);
    await MBld.allowApply({index:data.index,issNum:data.issNum});
    await APL.BloodUpdate(data.nickname, data.issNum);

    ctx.response.body = data;
    if(bl == 9){
        await PA.AddProgAchieve(data.nickname, 10, "blood_10", new Date());
        await APL.AchieveCount(data.nickname);
    }
    if(bl == 49){
        await PA.AddProgAchieve(data.nickname, 11, "blood_50", new Date());
        await APL.AchieveCount(data.nickname);
    }
    if(bl == 99){
        await PA.AddProgAchieve(data.nickname, 12, "blood_100", new Date());
        await APL.AchieveCount(data.nickname);
    }
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