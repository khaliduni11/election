const express = require("express");
const router = express.Router();
const db = require("../models");
const moment = require("moment")
const {adminRequired, proveRequired, checkVoted1, checkVoted2, checkDeadline} = require("../middleware/authorization");

router.get("/all_users", adminRequired, async (req, res, next) => {
    try{
        const users = await db.User.find({})
        return res.status(200).json({
            users
        })
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
});


router.get("/candidate", proveRequired, async (req, res, next) => {
    try{
        const candidates = await db.User.find({candidate1: true}).sort({votes: "desc"});
        return res.status(200).json({
            candidates
        })
    }catch(err){
        return rs.status(400).json({
            message: err.message
        })
    }
})


router.get("/vice_candidate", proveRequired, async (req, res, next) => {
    try{
        const viceCandidates = await db.User.find({candidate2: true}).sort({votes: "desc"});
        return res.status(200).json({
            viceCandidates
        })
    }catch(err){
        return rs.status(400).json({
            message: err.message
        })
    }
})

router.put("/vote_candidate_chairman/:get_vote/:voted1", proveRequired, checkVoted1, checkDeadline, async (req, res, next) => {
    try{
        const votes = await db.User.findOne({_id: req.params.get_vote})
        const votedfor = await db.User.findOneAndUpdate({_id: req.params.get_vote}, {votes: votes.votes + 1}, {new: true});
        const user = await db.User.findOneAndUpdate({_id: req.params.voted1}, {voted1: true }, {new: true});
        return res.status(200).json({
            user,
            votedfor
        })
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
})


router.put("/vote_candidate_vice_chairman/:get_vote/:voted2", proveRequired, checkVoted2, checkDeadline, async (req, res, next) => {
    try{
        const votes = await db.User.findOne({_id: req.params.get_vote})
        const votedfor = await db.User.findOneAndUpdate({_id: req.params.get_vote}, {votes: votes.votes + 1}, {new: true});
        const user = await db.User.findOneAndUpdate({_id: req.params.voted2}, {voted2: true }, {new: true});
        return res.status(200).json({
            votedfor,
            user
        })
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
})


router.put("/edit/:id", adminRequired, async (req, res, next) => {
    try{
        const updated = await db.User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        return res.status(200).json({
            updated
        })
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
});


router.get("/user/:id", async (req, res, next) => {
    try{
        let user = await db.User.findOne({_id: req.params.id});
        return res.status(200).json({
            user
        });
    }catch(err) {
        return res.status(400).json({
            message: err.message
        })
    }
});


router.put("/deadline", adminRequired, async (req, res, next) => {
    try{
        let deadline = await db.User.updateMany({}, {deadline: req.body.date}, {multi: true});
        return res.status(200).json({
            message: `Waqtiga kama dambaysta aad u samaysay waa ${moment(req.body.date).format("DD MMM YY")}`
        });
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
})


router.post("/search_users", adminRequired, async (req, res, next) => {
    try{
        const searchedUsers = await db.User.find({idCard: req.body.search})
        return res.status(200).json({
            searchedUsers
        })
    }catch(err){
        return res.status(400).json({
            messsage: err.message
        })
    }
})



module.exports = router;