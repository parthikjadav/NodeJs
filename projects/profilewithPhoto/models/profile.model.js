const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    }
})

const profile = mongoose.model('profileSchema', profileSchema)

module.exports = profile;