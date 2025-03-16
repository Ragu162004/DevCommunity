const userModel = require("../../model/userModel");

const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if(!user) {
        return res.status(200).send("No user found");
    }

    const matched = req.body.password == user.password;
    if(!matched) {
        return res.send("Password does not match");
    }

    return res.status().send(`Logged in as ${user.username}`);
  } catch (error) {
    console.error(`Error Occured at login: ${error}`);
  }
};
