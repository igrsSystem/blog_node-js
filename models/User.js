const mongoose = require('mongoose');
const passaportLocalMongoose = require('passport-local-mongoose');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    name:String,
    email:String
});

userSchema.plugin(passaportLocalMongoose, {usernameField:'email'});

module.exports = mongoose.model('User', userSchema);