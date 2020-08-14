const mongoose = require('mongoose');

const GitHubJobForUser = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    githubIds: {
        type: []
    },
    lastCreatedAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('GitHub', GitHubJobForUser);