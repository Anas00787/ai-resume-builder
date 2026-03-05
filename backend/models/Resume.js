const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  template: String,
  name: String,
  role: String,
  email: String,
  phone: String,
  address: String,
  skills: String,
  experience: String,
  education: String,
  projects: String,
  certifications: String,
  achievements: String,
  languages: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Resume", resumeSchema);