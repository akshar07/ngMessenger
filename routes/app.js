var express = require('express');
var router = express.Router();
// var User=require('../model/user');


router.get('/', function (req, res, next) {
    // User.findOne({},function(err,doc){
    //     if(err){
    //         return res.send('Error!');
    //     }
   
    // })
     res.render('index');
});

// router.post('/',function(req,res,next){
//     var email=req.body.email;
//     var user=new User({
//         firstName:'Akshar',
//         lastName:'Takle',
//         password:'akshar',
//         email:email
//     });
//     user.save();
//     res.redirect('/');
// })
module.exports = router;
