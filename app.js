var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors')
var routes = require('./routes/routes')

var app = express()
app.use(cors())
app.use('/api/v1',routes)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('<h1>Express & Firestore</h1>')
})

app.listen(3000, ()=>{
    console.log('Server activated @port 3000')
})