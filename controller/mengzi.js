const {Mengzi} = require('../model')

exports.getMengziList = async (req, res, next) => {
    try {

        const {skip, limit} = req.query 
        const poemsCount = await Mengzi.countDocuments()
        const poems = await Mengzi.find().skip(Number.parseInt(skip)).limit(Number.parseInt(limit))
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
