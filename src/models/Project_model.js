var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logo: String,
  owner: {
    type: String,
    //ref: 'User',
    required: true,
  },
  users: [String],
  created: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'Projects',
  timestamps: true,
});


module.exports.ProjectSchema=mongoose.models.Project || mongoose.model('Project', projectSchema);
