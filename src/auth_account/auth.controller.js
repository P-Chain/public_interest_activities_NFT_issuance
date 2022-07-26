const Joi = require('joi');
const Account = require('models/Account');
const insAccount = require('models/Ins_Account');
const APL = require('models/AchieveProgressLev');
const PA = require('models/Progressed_achieve');

// 로컬 회원가입
exports.localRegister = async (ctx) => {
    console.log(ctx.request.body);
    // 데이터 검증
    const schema = Joi.object().keys({
        nickname: Joi.string().min(3).max(15).required(),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6)
    });

    const result = schema.validate(ctx.request.body);

    if(result.error) {
        ctx.status = 400; // Bad request
        return;
    }

    // 아이디 / 이메일 중복 체크
    let existing = null;
    try {
        existing = await Account.findByEmailOrUsername(ctx.request.body);
        if(!existing){
            existing = await insAccount.findByEmailOrUsername(ctx.request.body);
        }
    } catch (e) {
        ctx.throw(500, e);
    }

    if(existing) {
    // 중복되는 아이디/이메일이 있을 경우
        ctx.status = 409; // Conflict
        // 어떤 값이 중복되었는지 알려줍니다
        ctx.body = {
            key: existing.email === ctx.request.body.email ? 'email' : 'nickname'
        };
        return;
    }

    // 계정 생성
    let account = null;
    try {
        account = await Account.localRegister(ctx.request.body);
        var data = await APL.userRegist(ctx.request.body.email,ctx.request.body.nickname);
        await PA.AddUser(ctx.request.body.nickname);
    } catch (e) {
        ctx.throw(500, e);
    }

    let token = null;
    try {
        token = await account.generateToken();
    }catch (e) {
        ctx.throw(500, e);
    }

    ctx.cookies.set('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7});
    ctx.body = account.profile; // 프로필 정보로 응답합니다.
};

exports.localInsRegister = async (ctx) => {
    console.log(ctx.request.body);
    // 데이터 검증
    const schema = Joi.object().keys({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6)
    });

    const result = schema.validate(ctx.request.body);

    if(result.error) {
        ctx.status = 400; // Bad request
        return;
    }

    // 아이디 / 이메일 중복 체크
    let existing = null;
    try {
        existing = await insAccount.findByEmailOrUsername(ctx.request.body);
        if(!existing){
            existing = await Account.findByEmailOrUsername(ctx.request.body);
        }
    } catch (e) {
        ctx.throw(500, e);
    }

    if(existing) {
    // 중복되는 아이디/이메일이 있을 경우
        ctx.status = 409; // Conflict
        // 어떤 값이 중복되었는지 알려줍니다
        ctx.body = {
            key: existing.email === ctx.request.body.email ? 'email' : 'nickname'
        };
        return;
    }

    // 계정 생성
    let account = null;
    try {
        account = await insAccount.localRegister(ctx.request.body);
    } catch (e) {
        ctx.throw(500, e);
    }

    let token = null;
    try {
        token = await account.generateToken();
    }catch (e) {
        ctx.throw(500, e);
    }

    ctx.cookies.set('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7});
    ctx.body = account.profile; // 프로필 정보로 응답합니다.
};

// 로컬 로그인
exports.localLogin = async (ctx) => {
    // 데이터 검증
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const result = schema.validate(ctx.request.body);

    if(result.error) {
        console.log(result.error);
        ctx.status = 400; // Bad Request
        return;
    }

    const { email, password } = ctx.request.body; 

    let account = null;
    try {
        // 이메일로 계정 찾기
        account = await Account.findByEmail(email);
        if(!account){
            account = await insAccount.findByEmail(email);
        }
    } catch (e) {
        ctx.throw(500, e);
    }

    if(!account || !account.validatePassword(password)) {
    // 유저가 존재하지 않거나 || 비밀번호가 일치하지 않으면
        console.log("input error");
        console.log(account);
        ctx.status = 403; // Forbidden
        return;
    }

    let token = null;
    try{
        token = await account.generateToken();
    }catch (e) {
        ctx.throw(500, e);
    }

    ctx.cookies.set('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7});
    ctx.body = account.profile;
};

// 이메일 / 아이디 존재유무 확인
exports.exists = async (ctx) => {
    const { key, value } = ctx.params;
    let account = null;

    try {
        // key 에 따라 findByEmail 혹은 findByUsername 을 실행합니다.
        account = await (key === 'email' ? Account.findByEmail(value) : Account.findByUsername(value));    
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.body = {
        exists: account !== null
    };
};

// 로그아웃
exports.logout = async (ctx) => {
    ctx.cookies.set('access_token', null, {
        maxAge: 0,
        httpOnly: true
    });
    ctx.status = 204;
};

// 현재 로그인 된 유저의 정보를 알려주는 api
exports.check = async (ctx) => {
    const { user } = ctx.request;

    if(!user) {
        ctx.status = 403; // Forbidden
        return;
    }
    ctx.body = {profile: user.profile, issuer: user.isIssuer, manager: user.isManager, nickname: user.nickname, email: user.email, wallet: user.wallet};
}

exports.changePass = async(ctx)=>{
    const schema = Joi.object().keys({
        password: Joi.string().required().min(6)
    });

    const result = schema.validate(ctx.request.body);

    if(result.error) {
        ctx.status = 400; // Bad request
        return;
    }
    var data = ctx.request.body;
    ctx.body = await Account.changePassword(data.email,data.password);
}

exports.changeWallet = async(ctx)=>{
    var data = ctx.request.body;
    console.log(data);
    ctx.body = await Account.changeWalletAddr(data.email,data.wallet,data.walletimage);
    
}

exports.getWalletImg = async(ctx)=>{
    var data = ctx.request.body;
    ctx.body = await Account.getWalletImg(data.nickname);
    
}

