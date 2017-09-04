var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 80))
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/css'))
app.use(express.static(__dirname + '/font-awesome'))
app.use(express.static(__dirname + '/fonts'))
app.use(express.static(__dirname + '/img'))
app.use(express.static(__dirname + '/js'))
app.use(express.static(__dirname + '/node_modules'))

app.get('/', function(req, res) {
  res.send('main')
  res.send('index')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
