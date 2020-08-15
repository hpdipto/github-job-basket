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
// @route POST /user/basket/github/save/:jobId
router.post('/basket/github/save/:jobId', async (req, res) => {
    
    if(req.user) {
        try {
            const user = await GitHubJobForUser.findOne({ userId: req.user.id });
            
            // if no user found, create user and add job
            if(!user) {
                const jobsForUser = new GitHubJobForUser({
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
                    const saveJob = await jobsForUser.save();
                    res.send('Saved');
                }
                catch(err) {
                    console.error(err);
                }
            }
            // else update githubIds
            else {
                let githubJobs = [...user.githubJobs];
                let newJob = {
                    id: req.body.id,
                    type: req.body.type,
                    created_at: req.body.created_at,
                    company: req.body.company,
                    location: req.body.location,
                    title: req.body.title,
                    description: req.body.description,
                    how_to_apply: req.body.how_to_apply,
                    company_logo: req.body.company_logo
                };

                // check if newJob already exists or not
                var index = 0;
                for(index = 0; index < githubJobs.length; index++) {
                    if(githubJobs[index].id == newJob.id) {
                        break;
                    }
                }
                // job doesn't exist
                if(index === githubJobs.length) {
                    githubJobs.push(newJob);
                }

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
// @route  Get /user/basket/github/:jobId
router.get('/basket/github/:jobId', async (req, res) => {

    try {
        if(req.user) {
            const user = await GitHubJobForUser.findOne({ userId: req.user.id });

            // check for logged in user
            if(user) {
                const githubJobs = user.githubJobs;
                var index = 0;
                for(index = 0; index < githubJobs.length; index++) {
                    if(githubJobs[index].id == req.params.jobId) {
                        return res.send(true);
                        break;
                    }
                }
                if(index === githubJobs.length) {
                    return res.send(false);
                }
            }
        }
        else {
            res.send('No User');
        }
    }
    catch(err) {
        console.log(req.params.jobId);
        console.error(err);
    }
});



// @desc   Get all the jobs of the user
// @route  GET /user/basket/github
router.get('/basket/github', async (req, res) => {

    try {
        if(req.user) {
            const user = await GitHubJobForUser.findOne({ userId: req.user.id });

            // check for logged in user
            if(user) {
                const githubJobs = user.githubJobs;
                res.json(githubJobs);
            }
        }
        else {
            res.send('No User');
        }
    }
    catch(err) {
        console.error(err);
    }
});


// @desc   Update jobs of the user
// @route  POST /user/basket/update
router.post('/basket/github/update', async (req, res) => {

    try {
        if(req.user) {
            const user = await GitHubJobForUser.findOne({ userId: req.user.id });

            // check for logged in user
            if(user) {
                const githubJobs = req.body;
                user.githubJobs = githubJobs;

                const update = await user.save();
                res.send('Updated');
            }
        }
        else {
            res.send('No User');
        }
    }   
    catch(err) {
        console.error(err);
    }
});


module.exports = router;