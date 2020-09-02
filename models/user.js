let mongoose 				= require('mongoose')
let passportLocalMongoose 	= require('passport-local-mongoose')

let userSchema = new mongoose.Schema({
	username	: {
        type: String,
        required: true
    },
	password	: {
        type: String
    },
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    }
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema)