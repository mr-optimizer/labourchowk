const Worker = require("../model/worker");
const ErrorHandler = require("../utils/errorHandlers");
const catchAyncErrors = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
const { use } = require("express/lib/application");

// const avatar = require("../../public/javascript/function");

// Register new Worker
exports.registerWorker = catchAyncErrors(async (req, res, next) => {
  // #TODO Avatar
  // console.log(avatar);
  // if(req.body.avatar === undefined){
  //     return next(new ErrorHandler("Please upload a profile picture", 500));
  // }
  // const result = await cloudinary.v2.uploader.upload(avatar, {
  //   floder: "worker",
  //   width: 150,
  //   crop: "scale",
  // });
  const {
    firstName,
    lastName,
    dateOfBirth,
    addressOne,
    addressTwo,
    pinCode,
    city,
    state,
    wage,
    workType,
    adharNo,
    contactNo,
    password,

  } = req.body;
  
  const user = await Worker.create({
    firstName,
    lastName,
    dateOfBirth,
    addressOne,
    addressTwo,
    pinCode,
    city,
    state,
    wage,
    workType,
    adharNo,
    contactNo,
    password,
    // avatar: {
    //   public_id: result.public_id,
    //   url: result.secure_url,
    // },
  });
//   for sending web-token 
  // sendToken(worker, 200, res);
  res.render("labourprofile", {
    firstName : user.firstName,
    lastName : user.lastName,
    addressOne : user.addressOne,
    addressTwo : user.addressTwo,
    pinCode : user.pinCode,
    wage : user.wage,
    city : user.city,
    state : user.state,
    workType : user.workType,
    adharNo : user.adharNo,
    contactNo : user.contactNo,
  });

});

// Login User
exports.loginWorker = catchAyncErrors (async (req, res, next) => {
  const { contactNo, password } = req.body;

  // check if email and password are entered or not
  if (!contactNo || !password) {
    return next(new ErrorHandler("Please enter a correct Contact number and password", 400));
  }

  // Finding user in database
  const user = await Worker.findOne({ contactNo }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid contact no. or Password", 401));
  }
  
  // check password is correct or not
  const isPasswordMattched = await user.comparePassword(password);


  if (!isPasswordMattched) {
    return next(new ErrorHandler("Invalid Password", 401));
  }
  // sendToken(user, 200, res);
  res.render("labourprofile", {
    firstName : user.firstName,
    lastName : user.lastName,
    addressOne : user.addressOne,
    addressTwo : user.addressTwo,
    pinCode : user.pinCode,
    city : user.city,
    state : user.state,
    wage : user.wage,
    workType : user.workType,
    adharNo : user.adharNo,
    contactNo : user.contactNo,
  });
})