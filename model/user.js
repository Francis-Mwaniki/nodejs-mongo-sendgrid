const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
   
    min: 6,
    max: 255,
  },
  password: {
    type: String,
   
    min: 6,
    max: 1024,
  },
  // Fields for password reset functionality
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
