module.exports = {
    path: 'http://localhost:',
    port: 9020,
    version: 'v1',
    mongodb: {
        auth: false,
        cookieSecret: 'nemv',
        database: 'nemv',
        host: 'localhost',
        port: 27017
    },
    session: {
        name: 'new_flow',
        secret: "aebn5@$#^1e2t$QG",
        key: "aebn5awegera1e2t$QG",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 1 * 1 } //1 hour
        // store: new MongoStore({
        //     db: 'flow',
        //     // host: 'localhost',
        //     // port: 27017
        // })
    },
    wechat: {
        token: 'mumudev',
        appid: 'appid',
        appSecret: 'appSecret',
        mchId: "<mchid>",
        notifyUrl: "<notifyurl>",
        partnerKey: "<partnerkey>",
        encodingAESKey: 'encodingAESKey'
    }
};