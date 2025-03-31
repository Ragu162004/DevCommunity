const userModel = require("../model/userModel");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const { generateTokenAndSetCookie } = require("../lib/utils/generateTokenAndSetCookie");

require("dotenv").config();

const register = async (req, res) => {
  try {
    const { username, fullname, email, password } = req.body;

    // Validate request body
    if (!username || !fullname || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    //Check if the user Already Exist
    const user = await userModel.findOne({ email: email });
    if (user) {
      return res.status(409).json({
        Message: `User: ${username} is already Exist`,
        success: false,
      });
    }
    const hashedPassword = await argon2.hash(password);
    //Creating new User object with userModel (Schema Object)
    const newUser = new userModel({
      username,
      fullname,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).send({
        message: "User Created Successfully",
        success: true,
        data: newUser,
      });
    }

    return res
      .status(400)
      .json({ message: "Error Occured during registration", success: false });
  } catch (error) {
    //return the error to the client
    return res.status(500).json({
      Message: `Error Occured while registering: ${error}`,
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check the user Already Exist
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ Message: "No user found", success: false });
    }

    //check the credentials of user
    const matched = await argon2.verify(user.password, password);
    if (!matched) {
      return res
        .status(401)
        .json({ Message: "Invalid Credentials", success: false });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );

    //return the response to the requested client
    return res.cookies;
  } catch (error) {
    //returns error message to the client
    return res
      .status(500)
      .json({ Message: `Error Occured at login: ${error}`, success: false });
  }
};

const test = async (req, res) => {
  try {
    //Check the user Already Exist
    const users = await userModel.find();
    if (!users) {
      return res.status(404).json({ Message: "No user found", success: false });
    }

    //return the response to the requested client
    return res.status(200).json({
      Message: `Feteched all users ${users.length}`,
      success: true,
      data: users,
    });
  } catch (error) {
    //returns error message to the client
    return res.status(500).json({
      Message: `Error Occured while fetching: ${error}`,
      success: false,
    });
  }
};

module.exports = { login, register, test };
