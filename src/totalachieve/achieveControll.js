const AT = require('models/Achieve_total')

exports.loadAchieveNotCond = async (ctx) => {
    ctx.body = await AT.viewcond();
}

exports.findAchieve = async(ctx)=>{
    ctx.body = await AT.findAchieveByID(ctx.request.body.id);
}