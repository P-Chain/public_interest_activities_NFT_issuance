const IM = require('models/issManage');

exports.issApply = async (ctx) => {
    ctx.body = await IM.newApply(ctx.request.body)
}
exports.getcount = async(ctx)=>{
    ctx.body = await IM.getCount();
}