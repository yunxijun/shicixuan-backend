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
    Chuci:mongoose.model('Chuci', require('./chuci')),
    Shijing:mongoose.model('Shijing', require('./shijing')),
    Lunyu:mongoose.model('Lunyu', require('./lunyu')),
    Mengzi:mongoose.model('Mengzi', require('./mengzi')),
    Daxue:mongoose.model('Daxue', require('./daxue')),
    Zhongyong:mongoose.model('Zhongyong', require('./zhongyong')),
    Tangshi:mongoose.model('Tangshi', require('./tangshi')),
    Songci:mongoose.model('Songci', require('./songci')),
}
