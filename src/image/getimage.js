const fs = require('fs').promises;
var mime = require('mime');

// 업적 불러오기

exports.getimage = async (ctx) => {
    const { key } = ctx.params;
    console.log(key);
    var imgMime = mime.getType('./tmp/achieves/'+key);
    ctx.type = imgMime;
    console.log(ctx.type);
    console.log(imgMime)
    fs.readFile('./tmp/achieves/'+key).then((data)=>{
        console.log(data);
        ctx.body = data.buffer;
        ctx.set('Content-Type' , 'text/html');
        console.log(ctx.type);
    })
}