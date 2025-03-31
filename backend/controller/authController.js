const userModel = require("../model/userModel");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const {
  generateTokenAndSetCookie,
} = require("../lib/utils/generateTokenAndSetCookie");

require("dotenv").config();

const register = async (req, res) => {
  try {
    const { username, fullname, email, password } = req.body;

    if (!username || !fullname || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const user = await userModel.findOne({ email: email });
    if (user) {
      return res.status(409).json({
        Message: `User: ${username} is already Exist`,
        success: false,
      });
    }
    const hashedPassword = await argon2.hash(password);
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
        _id: user._id,
        username: user.username,
        email: user.email,
        fullname: user.fullname,
        followers: user.followers,
        following: user.following,
        profileImg: user.profileImg,
        message: "User Created Successfully",
        success: true,
      });
    }

    return res
      .status(400)
      .json({ message: "Error Occured during registration", success: false });
  } catch (error) {
    return res.status(500).json({
      Message: `Error Occured in Register Controller: ${error}`,
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    const matched = await argon2.verify(user?.password || "", password);
    if (!user || !matched) {
      return res
        .status(401)
        .json({ Message: "Invalid Credentials", success: false });
    }

    generateTokenAndSetCookie(user._id, res);

    return res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      fullname: user.fullname,
      followers: user.followers,
      following: user.following,
      profileImg: user.profileImg,
      Message: `User ${user.username} logged in successfully`,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      Message: `Error Occured in Login Controller: ${error}`,
      success: false,
    });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({
      Message: `User logged out successfully`,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      Message: `Error Occured in Logout Controller: ${error}`,
      success: false,
    });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await userModel
      .findById(req.user._id)
      .select(`-${req.user.password}`);

    if (!user) {
      return res.status(404).json({
        Message: `User not found`,
        success: false,
      });
    }

    return res.status(200).json({
      Message: `User ${user.username} fetched successfully`,
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      Message: `Error Occured in GetMe Controller: ${error}`,
      success: false,
    });
  }
};

const test = async (req, res) => {
  try {
    const users = await userModel.find();
    if (!users) {
      return res.status(404).json({ Message: "No user found", success: false });
    }

    return res.status(200).json({
      Message: `Feteched all users, count: ${users.length}`,
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      Message: `Error Occured while fetching: ${error}`,
      success: false,
    });
  }
};

module.exports = { login, register, test, logout, getMe };
