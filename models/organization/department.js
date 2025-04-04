const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100,
    unique: true
  },
  description: {
    type: String,
    maxLength: 255
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('department', departmentSchema);