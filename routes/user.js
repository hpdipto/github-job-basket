const express = require('express');

const router = express.Router();

const GitHubJobForUser = require('../models/GitHub');


// @desc    Get logged in user data
// @route   GET /user/login
router.get('/login', (req, res) => {
    if(req.user) {
        res.send(req.user);
    }
    else {
        res.send('No User');
    }
});


// @desc  Save a job in user's basket
// @route GET /user/basket/save/:jobId
router.get('/basket/save/:jobId', async (req, res) => {
    if(req.user) {
        try {
            const user = await GitHubJobForUser.findOne({ userId: req.user.id });

            // if no user found, create user and add jobId
            if(!user) {
                const gitHubJobsForUser = new GitHubJobForUser({
                    userId: req.user.id,
                    githubIds: [req.params.jobId]
                });

                try {
                    const saveJob = await gitHubJobsForUser.save();
                    res.send('Saved');
                }
                catch(err) {
                    console.error(err);
                }
            }
            // else update githubIds
            else {
                let githubIds = [...user.githubIds, req.params.jobId];
                user.githubIds = githubIds;

                try {
                    const updateJob = await user.save();
                    res.send('Updated!');
                }
                catch(err) {
                    console.error(err);
                }
            }
        }
        catch(err) {
            console.error(err);
        }
    }
    else {
        res.send('No User');
    }
});


// @desc   Check if a job already saved or not
// @route  Get /user/basket/:jobId
router.get('/basket/:jobId', async (req, res) => {

    try {
        const user = await GitHubJobForUser.findOne({ userId: req.user.id });

        // check for logged in user
        if(user) {
            const githubIds = user.githubIds;
            githubIds.forEach(gIds => {
                if(gIds === req.params.jobId) {
                    return res.send(true);
                }
            });
            return res.send(false);
        }
    }
    catch(err) {
        console.error(err);
    }
});


module.exports = router;