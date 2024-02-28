
import mongoose from 'mongoose'


var Schema = mongoose.Schema;
var notificationDataSchema = new Schema({
	name: String,
	sid: String,
	from: String,
	to: String,
	message: String,
	eventid: String,
	eventname: String,
	status: String,
	type: String
}, {
	collection: 'Notifications',
	timestamps: true
});


module.exports = mongoose.models.Notification || mongoose.model('Notification', notificationDataSchema);
