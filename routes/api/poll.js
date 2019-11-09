const express = require('express');
const UserResponse = require('../../models/UserResponse');
const UserIP = require('../../models/UserIP');

const router = express.Router();

// @route  POST api/poll
// @desc   Poll your opinions
// @access Public 
router.post('/',async (req, res) => {
    const reqBodyArray = [...req.body];
    let i, questionNum, dbRes;

    try {
        dbRes = await UserIP.findOne({ip: req.ip}, '_id'); 
    } catch (err) {
        res.status(500).send('Server Error');
    }
    
    if (dbRes == null) {
        try {
            await UserIP.create({ip: req.ip}); 
        } catch (err) {
            res.status(500).send('Server Error');
        }
    
        for(i = 0; i < reqBodyArray.length; i++) {
            questionNum = i + 1;
            try {
                dbRes = await UserResponse.findOne({questionNumber: questionNum}, reqBodyArray[i]);
                if (dbRes == null) { 
                    dbRes = await UserResponse.create({questionNumber: questionNum, option1: 0, option2: 0, option3: 0, option4: 0});
                }
                await UserResponse.updateOne({questionNumber: questionNum}, {[reqBodyArray[i]]: dbRes[reqBodyArray[i]] + 1});
            } catch (err) {
                res.status(500).send('Server Error');
            }         
        }
        res.json({msg: 'Thanks for sharing your opinion.Your opinion has been recorded successfully'});
    } else {
        res.json({msg: 'You have already submitted your response'});
    }
});

module.exports = router;