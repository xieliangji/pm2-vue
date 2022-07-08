const express = require('express')

const pm2App = express()
pm2App.use(express.static('./dist'))
pm2App.listen(5000, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('项目启动成功')
    }
})