const MDone = require('models/doneManage');
const APL = require('models/AchieveProgressLev');

// 봉사시간 갱신 신청 관리

exports.viewDoneApply = async (ctx) => {
    // 봉사시간 갱신 신청 확인
    var data = await MDone.viewApply();
    ctx.response.body = data;
};

exports.allowDoneApply = async (ctx) => {
    // 봉사시간 갱신 신청 수락
    var data = ctx.request.body;
    await MDone.allowApply({index:data.index,doneNum:data.doneNum});
    await APL.DoneUpdate(data.nickname, data.doneNum);
    ctx.response.body = data;
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