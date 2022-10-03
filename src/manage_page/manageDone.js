const MDone = require('models/doneManage');
const APL = require('models/AchieveProgressLev');
const PA = require('models/Progressed_achieve');

// 봉사시간 갱신 신청 관리

exports.viewDoneApply = async (ctx) => {
    // 봉사시간 갱신 신청 확인
    var data = await MDone.viewApply();
    ctx.response.body = data;
};

exports.allowDoneApply = async (ctx) => {
    // 봉사시간 갱신 신청 수락
    var data = ctx.request.body;
    var don = await APL.findDoneNum(data.nickname);
    await MDone.allowApply({index:data.index,doneNum:data.doneNum});
    await APL.DoneUpdate(data.nickname, data.doneNum);
    ctx.response.body = data;
    if(vs<100000&&data.don+doneNum>=100000){
        await PA.AddProgAchieve(data.nickname, 4, "don_100k", new Date());
        await APL.AchieveCount(data.nickname);
    }
    if(vs<1000000&&data.don+doneNum>=1000000){
        await PA.AddProgAchieve(data.nickname, 5, "don_1m", new Date());
        await APL.AchieveCount(data.nickname);
    }
    if(vs<10000000&&data.don+doneNum>=10000000){
        await PA.AddProgAchieve(data.nickname, 6, "don_10m", new Date());
        await APL.AchieveCount(data.nickname);
    }
};

exports.denyDoneApply = async (ctx) => {
    // 봉사시간 갱신 신청 거부
    var data = ctx.request.body;
    await MDone.denyApply(data.index);
    ctx.response.body = data;
};

exports.nowDone = async(ctx)=>{
    var data = ctx.request.body;
    ctx.response.body = await APL.findDoneNum(data.nickname);
}