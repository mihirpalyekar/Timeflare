var mongoose = require('mongoose')


var Schema = mongoose.Schema;

var userDataSchema = new Schema({
	name: String,
	email: String,
    password: String,
	level: {
		type: Number,
		required: true
	},
	created: Date,
	status: String,
	lock: Boolean, 
	avatar: String,
	language: String,
	projects: [String]
}, {
	collection: 'Users',
	timestamps: true
});

//var UserData = mongoose.model('User', userDataSchema);

module.exports.UserSchema = mongoose.models.User || mongoose.model('User', userDataSchema);