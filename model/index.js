const mongoose = require('mongoose');
const { dbUri } = require('../config/config.default')

// 链接mongoDB 数据库
mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// 当连接失败
db.on('error', (err) => {
    console.log('MongoDB 数据库连接失败', err);
});

// 连接成功
db.once('open', function () {
    // we're connected!
    console.log('MongoDB 数据库连接成功');
});

// 组织导出模型类
module.exports = {
    CaocaoShiJi:mongoose.model('CaocaoshiJi', require('./caocaoshiji')),
    Chuci:mongoose.model('Chuci', require('./chuci'))
}
