
const jwt = require("jsonwebtoken");
const moment = require("moment");


exports.loginRequired = function(req, res, next){
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET, function(err, decoded){
            if(decoded){
                return next();
            }else{
                return res.status(401).json({
                    message: "Unauthorized"
                })
            }
        })
    }catch(err){
        return res.status(401).json({
            message: err.message
        })
    }
}

exports.proveRequired = function(req, res, next){
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET, function(err, decoded){
            if(decoded && decoded.user.prove){
                return next();
            }else{
                return res.status(401).json({
                    message: "Cinwaankaaga lama aqbalin"
                })
            }
        })
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
}


exports.adminRequired = function(req, res, next){
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET, function(err, decoded){
            if(decoded && decoded.user.admin){
                return next();
            }else{
                return res.status(401).json({
                    message: "Unauthorized"
                })
            }
        })
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
}


exports.checkVoted1 = function(req, res, next){
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET, function(err, decoded){
            if(decoded && !decoded.user.voted1){
                return next()
            }else{
                return res.status(401).json({
                    message: "Horay ayaad u codeysay"
                })
            }
        })
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
}

exports.checkVoted2 = function(req, res, next){
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET, function(err, decoded){
            if(decoded && !decoded.user.voted2){
                return next()
            }else{
                return res.status(401).json({
                    message: "Horay ayaad u codeysay"
                })
            }
        })
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
}


exports.checkDeadline = function(req, res, next){
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET, function(err, decoded){
            if(decoded && moment(decoded.user.deadline).isSameOrAfter(moment(), "day")){
                return next();
            }else{
                return res.status(401).json({
                    message: "Waqtiga codaynta wuu dhamaaday"
                })
            }
        })
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
}