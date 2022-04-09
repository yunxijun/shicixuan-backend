const {Chuci} = require('../model')

exports.getChuciList = async (req, res, next) => {
    try {

        const {skip, limit} = req.query 
        const poemsCount = await Chuci.countDocuments()
        const poems = await Chuci.find().skip(Number.parseInt(skip)).limit(Number.parseInt(limit))
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
