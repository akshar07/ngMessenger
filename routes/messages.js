var express =require('express');
var router=express.Router();

var Message=require('../model/message');

router.post('/',function(req,res,next){
    var message=new Message({
        content:req.body.content,
    });
    message.save(function(err,result){
        if(err){
            return res.status(500).json({
                title:'an error occured',
                error:err
            });
        }
        res.status(201).json({
            message:'message saved',
            obj:result
        });
    })
});
router.get('/',function(req,res,next){
    Message.find()
        .exec(function(err,messages){
            if(err){
                return res,status(500).json({
                    title:'An error occured',
                    error:err
                });
            }
            res.status(200).json({
                message:'Success',
                obj:messages
            });
        });
});
router.patch('/:id',function(req,res,next){
    Message.findById(req.params.id,function(err,message){
        return res.status(500).json({
            title:'an error occured',
            error:err
        });
    })
    if(!Message){
        return res.status(500).json({
            title:'message not found',
            error:{message:'message not found'}
        });
    }
    message.content=req.body.content;
    message.save(function(err,result){
        if(err){
            return res.status(500).json({
                title:'an error occured',
                error:err
            });
            res.status(200).json({
                message:'message updated',
                obj:result
            })
        }
    })
})
module.exports=router;