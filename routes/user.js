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
// @route POST /user/basket/save/:jobId
router.post('/basket/save/:jobId', async (req, res) => {
    
    if(req.user) {
        try {
            const user = await GitHubJobForUser.findOne({ userId: req.user.id });
            
            // if no user found, create user and add job
            if(!user) {
                const gitHubJobsForUser = new GitHubJobForUser({
                    userId: req.user.id,
                    githubJobs: [
                        {
                            id: req.body.id,
                            type: req.body.type,
                            created_at: req.body.created_at,
                            company: req.body.company,
                            location: req.body.location,
                            title: req.body.title,
                            description: req.body.description,
                            how_to_apply: req.body.how_to_apply,
                            company_logo: req.body.company_logo
                        }
                    ]
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
                let githubJobs = [
                    ...user.githubJobs,
                    {
                        id: req.body.id,
                        type: req.body.type,
                        created_at: req.body.created_at,
                        company: req.body.company,
                        location: req.body.location,
                        title: req.body.title,
                        description: req.body.description,
                        how_to_apply: req.body.how_to_apply,
                        company_logo: req.body.company_logo
                    }
                ]
                user.githubJobs = githubJobs;

                try {
                    const updateJob = await user.save();
                    res.send('Updated');
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
        if(req.user) {
            const user = await GitHubJobForUser.findOne({ userId: req.user.id });

            // check for logged in user
            if(user) {
                const githubJobs = user.githubJobs;
                githubJobs.forEach(job => {
                    if(job.id === req.params.jobId) {
                        return res.send(true);
                    }
                });
                return res.send(false);
            }
        }
        else {
            // do nothing
        }
    }
    catch(err) {
        console.error(err);
    }
});


module.exports = router;