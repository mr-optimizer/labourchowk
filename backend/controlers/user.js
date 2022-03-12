const User = require("../model/user");
const Worker = require("../model/worker");
const ErrorHandler = require("../utils/errorHandlers");
const catchAyncErrors = require("../middlewares/catchAsyncErrors");
// const sendToken = require("../utils/jwtToken");
// const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apiFeatures");
const accountSid = 'ACc50e46eb3cda0745f873a5257bccbcb3'; // Your Account SID from www.twilio.com/console
const authToken = 'cf4328c4c243b7b7190b81e9398da83f'; // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

var currUser;

// Register new User
exports.registerUser = catchAyncErrors(async (req, res, next) => {
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
    addressOne,
    addressTwo,
    pinCode,
    city,
    state,
    contactNo,
    email,
    password,
    // avatar: {
    //     public_id: result.public_id,
    //     url: result.secure_url,
    //   },
  } = req.body;

  const user = await User.create({
    firstName,
    lastName,
    addressOne,
    addressTwo,
    pinCode,
    city,
    state,
    contactNo,
    email,
    password,
  });
  currUser = user;
  //   for sending web-token
  // sendToken(user, 200, res);
  client.messages
    .create({
        body: 'Thank you for registering.For any assistance you can call +916203758936',
        to: '+918700731873', // Text this number
        from: '(747) 219-2077', // From a valid Twilio number
    })
    .then((message) => console.log(message));


  let queryUrl = {
    pinCode : pinCode * 1,
  };
  const apiFeatures = new ApiFeatures(Worker.find(), queryUrl)
    .search() //all the products in Product collection is now stored in apifeaturs
    .filter() //all the product matching with keyword is store in this
    .pagination(100); //maximum resPerPage is shown in 1 page
  const workers = await apiFeatures.query;

  res.render("userprofile", {
    firstName: user.firstName,
    lastName: user.lastName,
    addressOne: user.addressOne,
    addressTwo: user.addressTwo,
    pinCode: user.pinCode,
    city: user.city,
    state: user.state,
    email: user.email,
    contactNo: user.contactNo,
    workers: workers,
  });
  npm;
});

// Login User
exports.loginUser = catchAyncErrors(async (req, res, next) => {
  const { contactNo, password } = req.body;

  // check if email and password are entered or not
  if (!contactNo || !password) {
    return next(
      new ErrorHandler(
        "Please enter a correct Contact number and password",
        400
      )
    );
  }

  // Finding user in database
  const user = await User.findOne({ contactNo }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid contact no. or Password", 401));
  }

  // check password is correct or not
  const isPasswordMattched = await user.comparePassword(password);

  if (!isPasswordMattched) {
    return next(new ErrorHandler("Invalid Password", 401));
  }
  currUser = user;

  let queryUrl = {
    pinCode : user.pinCode * 1,
  };

  const apiFeatures = new ApiFeatures(Worker.find(), queryUrl)
    .search() //all the products in Product collection is now stored in apifeaturs
    .filter() //all the product matching with keyword is store in this
    .pagination(100); //maximum resPerPage is shown in 1 page
  const workers = await apiFeatures.query;

  // console.log(workers);
  res.render("userprofile", {
    firstName: user.firstName,
    lastName: user.lastName,
    addressOne: user.addressOne,
    addressTwo: user.addressTwo,
    pinCode: user.pinCode,
    city: user.city,
    state: user.state,
    email: user.email,
    contactNo: user.contactNo,
    workers: workers,
  });
});

// get rendom workers near me
exports.getRandomWorker = catchAyncErrors(async (req, res, next) => {
  const resPerPage = 400;

  let query_url = {
    // "keyword" : `${req.body.work_type}`,
  };
  if (req.body.work_type && req.body.work_type.length > 2) {
    query_url.workType = `${req.body.work_type}`;
  }
  if (req.body.price) {
    query_url.wage = { lte: req.body.price * 1 };
  }
  if (req.body.pin_code) {
    query_url.pinCode = req.body.pin_code * 1;
  }
  console.log(query_url);
  const user = currUser;
  const apiFeatures = new ApiFeatures(Worker.find(), query_url)
    .search() //all the products in Product collection is now stored in apifeaturs
    .filter() //all the product matching with keyword is store in this
    .pagination(resPerPage); //maximum resPerPage is shown in 1 page
  const workers = await apiFeatures.query;
  res.render("userprofile", {
    firstName: user.firstName,
    lastName: user.lastName,
    addressOne: user.addressOne,
    addressTwo: user.addressTwo,
    pinCode: user.pinCode,
    city: user.city,
    state: user.state,
    email: user.email,
    contactNo: user.contactNo,
    workers: workers,
  });
});
