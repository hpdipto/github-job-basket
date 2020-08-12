const express = require('express');
const passport = require('passport');
const router = express.Router();


// @desc    Authenticate with google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));


// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get('/google/callback', 
            passport.authenticate('google'),
            (req, res) => {
                // res.send(req.user);
                res.redirect('http://localhost:3000');

            });


// @desc    Google Logout
// @route   GET /auth/logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:3000');
})


module.exports = router;