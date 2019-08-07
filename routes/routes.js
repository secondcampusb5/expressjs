var express = require('express')
var router = express.Router()

var admin=require('../routes/admin');
var user=require('../routes/user');

router.use('/admin',admin);
router.use('/user',user);

module.exports = router;