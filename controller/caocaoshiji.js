const {CaocaoShiJi} = require('../model')

exports.getCaocaoshijiList = async (req, res, next) => {
    try {
        const poems = await CaocaoShiJi.find()
        const poemsCount = await CaocaoShiJi.countDocuments()
        // 处理请求
        return res.status(200).json({
            poems,
            poemsCount,
            meta: {
                "msg": "获取成功",
                "status": 200
            }
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}
