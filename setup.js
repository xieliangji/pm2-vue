const express = require('express')
const history = require('connect-history-api-fallback')

const pm2App = express()
pm2App.use(express.static('./dist')).use(history({
    index: '/index.html'
}))
pm2App.listen(5000, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('项目启动成功')
    }
})