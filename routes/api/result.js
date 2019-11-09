const express = require('express');
const UserResponse = require('../../models/UserResponse');

const router = express.Router();

// @route  GET api/result
// @desc   Show results of polls
// @access Public 
router.get('/', async (req, res) => {
    let dbRes;
    try {
        dbRes = await UserResponse.find();
    } catch (err) {
        res.status(500).send('Server Error');
    }
    res.send(dbRes);
});

module.exports = router;