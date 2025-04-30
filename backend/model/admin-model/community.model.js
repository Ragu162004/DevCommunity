const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      require: true,
    },
    admins: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      default:
        "https://www.google.com/imgres?q=tag%20logo%20in%20html&imgurl=https%3A%2F%2Fendlessicons.com%2Fwp-content%2Fuploads%2F2013%2F11%2Fhtml-tag-icon.png&imgrefurl=https%3A%2F%2Fendlessicons.com%2Ffree-icons%2Fhtml-tag-icon%2F&docid=wlxINgC-S3HApM&tbnid=2S5ANB88ZKnjjM&vet=12ahUKEwixj_a-9_6MAxXVS2cHHXw8EN8QM3oECB0QAA..i&w=614&h=614&hcb=2&ved=2ahUKEwixj_a-9_6MAxXVS2cHHXw8EN8QM3oECB0QAA",
    },
    status: {
      type: Boolean,
      default: true,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Community = mongoose.model("Community", communitySchema); 
module.exports = Community;
