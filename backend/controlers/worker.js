const Worker = require("../model/worker");
const ErrorHandler = require("../utils/errorHandlers");
const catchAyncErrors = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");
const cloudinary = require("cloudinary");


// Register new Worker
exports.registerWorker = catchAyncErrors(async (req, res, next) => {
  // #TODO Avatar
//   if(req.body.avatar === undefined){
//       return next(new ErrorHandler("Please upload a profile picture", 500));
//   }
//   const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
//     floder: "users",
//     width: 150,
//     crop: "scale",
//   });
  const {
    firstName,
    lastName,
    dateOfBirth,
    addressOne,
    addressTwo,
    pinCode,
    city,
    state,
    workType,
    adharNo,
    contactNo,
    password,
    // avatar: {
    //     public_id: result.public_id,
    //     url: result.secure_url,
    //   },
  } = req.body;
  
  const worker = await Worker.create({
    firstName,
    lastName,
    dateOfBirth,
    addressOne,
    addressTwo,
    pinCode,
    city,
    state,
    workType,
    adharNo,
    contactNo,
    password,
  });
//   for sending web-token 
  sendToken(worker, 200, res);
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
  sendToken(user, 200, res);
})