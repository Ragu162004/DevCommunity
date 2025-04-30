const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    role: {
      type: String,
      enum: ["dev", "admin"],
      default: "dev",
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    profileImg: {
      type: String,
      default: "https://www.w3schools.com/howto/img_avatar.png",
    },
    bio: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },  
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
