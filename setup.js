const express = require('express')
const fs = require('fs')

const pm2App = express()
pm2App.use(express.static('./dist'))
pm2App.get('/*', (req, res) => {
    res.send(fs.readFileSync('./dist/index.html', 'utf-8'))
})
pm2App.listen(5000, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('项目启动成功')
    }
})
