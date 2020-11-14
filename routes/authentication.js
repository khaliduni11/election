const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");


router.post("/signup", async (req, res, next) => {
    try{
        const user = await db.User.create(req.body);
        const token = await jwt.sign({
            user
        }, process.env.SECRET);
        return res.status(200).json({
            token
        })
    }catch(err){
        if(err.code === 11000){
            return res.status(400).json({
                message: "Horay ayaad isku diiwan galisay."
            })
        }
        return res.status(400).json({
            message: err.message
        })
    }
});


router.post("/signin", async (req, res, next) => {
    try{
        const user = await db.User.findOne({idCard: req.body.idCard})
        if(user){
            let token = await jwt.sign({
                user
            }, process.env.SECRET);
            return res.status(200).json({
                token
            })
        }else{
            return res.status(400).json({
                message: "Id numberkaaga iska hubi"
            })
        }
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
})


module.exports = router;