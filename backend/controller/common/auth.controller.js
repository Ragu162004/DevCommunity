const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../../model/common/user.model");
const CryptoJS = require("crypto-js");

const register = async (req, res) => {
  const { username, fullname, email, password } = req.body;
  try {
    if (!username || !fullname || !email || !password) {
      res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = User.findOne({ email: email });
    if (!user) {
      res.status(409).json({
        message: "User Already Exist",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      username,
      fullname,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
      message: "Registeration Successfull",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error Occured in Register Controller ${error}`,
      success: false,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      res.json({
        message: "User doesn't exist. Please try Sign up first.",
        success: false,
      });
    }

    const checkPassword = bcrypt.compare(password, user.password);

    if (!checkPassword) {
      res.json({
        message: "Invalid Credentials",
        success: false,
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        email: user.email,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    const encrpytedToken = CryptoJS.AES.encrypt(
      token,
      process.env.CRYPTO_SECRET_KEY
    ).toString();

    res
      .cookie("token", encrpytedToken, {
        httpOnly: true,
        secure: false,
      })
      .json({
        message: "Login Successfull",
        success: true,
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
        },
      });
  } catch (error) {
    res.status(500).json({
      message: `Error Occured in Login Controller: ${error}`,
      success: false,
    });
  }
};

const logout = (req, res) => {
  res.clearCookie("token").json({
    message: "Logged Out Successfully",
    success: true,
  });
};

const getMe = (req, res) => {
  const user = req.user;
  console.log(user);
  res.status(200).json({
    message: "Authorized User.",
    success: true,
    user,
  });
};

module.exports = { register, login, logout, getMe };
