var express = require('express')
var router = express.Router()

var mw=require('../middlewares/middlewares');


router.get('/login',mw[1], (req, res)=> {
 console.log('get login')
 res.end();
})

router.get('/logout',mw[0], (req, res)=> {
    console.log('get logout')
    res.end();
})

module.exports = router;