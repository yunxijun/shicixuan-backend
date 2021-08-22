// 这是入口文件
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const errorHandle = require('./middleware/error-handler')
const router = require('./router')

require('./model')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

app.use('/static', express.static('public/dist'))

app.use('/api', router)

app.use(errorHandle())

app.listen(PORT, () => {
    console.log(`Shicixuan app listening at http://localhost:${PORT}`)
})
