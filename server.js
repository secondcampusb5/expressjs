var express = require('express')
var app = express()

var rt=require('./routes/routes');


app.use('/api',rt);



app.listen(3000)