const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const workerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, " name can't be empty"],
    min: [3, "please enter valid name"],
    max: 25,
  },
  lastName: {
    type: String,
    max: 15,
  },
  dateOfBirth: {
    type: Date,
    default: Date.now(),
  },
  addressOne: {
    type: String,
    required: [true, "required filed"],
    min: [4, "please enter the valid address"],
    max: 40,
  },
  addressTwo: {
    type: String,
    max: 40,
  },
  pinCode: {
    type: String,
    required: [true, "required field"],
    min: [6, "please enter the valid pincode"],
    max: 6,
  },
  city: {
    type: String,
    required: [true, "required field"],
  },
  state: {
    type: String,
    required: [true, "required field"],
  },
  workType: {
    type: String,
    required: [true, "Please select your work type"],
  },
  adharNo: {
    type: String,
    required: true,
    unique: true,
    min: 12,
    max: 12,
  },
  contactNo: {
    type: String,
    required: [true, "required field"],
    min: [10, "please enetr valid contact no."],
    max: 10,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 16,
    select: false,
  },
  wage: {
    type: Number,
    required : [true, "Please enter your daily wage"]
  },
  avatar: {
    public_id: {
      type: String,
      // required: [true, "Please upload a profile picture"],
    },
    url: {
      type: String,
      // required: [true, "Please upload a profile picture"],
    },
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

// Encrypting password before saving
workerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
// compare user password
workerSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// return JSON Web Tocken(jwt)
workerSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

// Generating password reset token
workerSchema.methods.getResetPasswordToken = function () {
  // generate new password reset token from crypto
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash the resetToken and assign to worker's resetPasswordToken
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // setting token expire time to 30min
  this.resetPasswordExpires = Date.now() + 30 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model("Worker", workerSchema);
