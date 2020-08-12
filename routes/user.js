const express = require('express');

const router = express.Router();


// @desc    Login
// @route   GET /user/login
router.get('/login', (req, res) => {
    if(req.user) {
        res.send(req.user);
    }
    else {
        res.send('No User');
    }
});


module.exports = router;