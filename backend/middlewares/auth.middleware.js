const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized User!",
      success: false,
    });
  }

  try {
    const bytes = CryptoJS.AES.decrypt(token, process.env.CRYPTO_SECRET_KEY);
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);

    const decoded = jwt.verify(decryptedToken, process.env.JWT_SECRET_KEY);
    req.user = decoded;

    next(); 
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized User!",
      success: false,
    });
  }
};

module.exports = authMiddleware;
