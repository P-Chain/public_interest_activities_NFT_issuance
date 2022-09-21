const MVMS = require('models/vmsManage');

// 봉사시간 갱신 신청 관리

exports.viewVmsApply = async (ctx) => {
    // 업적 랭킹 불러오기
    var data = await MVMS.viewApply();
    ctx.response.body = data;
};

