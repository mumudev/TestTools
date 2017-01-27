module.exports = {
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
    //     host: '120.77.49.115',
    //     port: 27717
    // })
};