var express = require('express')
var app = express()

app.enable('trust proxy')
app.get('/', function(req, res) {
    var ipaddress = req.ip
    var language = req.headers['accept-language'].split(',')[0]
    var software = req.headers['user-agent'].match(/\(([^\)]+)\)/)[1]
    res.json({
        ipaddress,
        language,
        software
    })
})

app.listen(process.env.PORT || 8080)