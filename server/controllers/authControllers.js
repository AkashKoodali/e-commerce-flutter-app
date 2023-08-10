const User = require("../models/User");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: crypto.AES.encrypt(
        req.body.password,
        process.env.SECRET
      ).toString(),
      location: req.body.location,
    });

    try {
      await newUser.save();
      res.status(201).json({
        message: "User successfully created",
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(401).json("user could not found.");

      const decryptedpassword = crypto.AES.decrypt(
        user.password,
        process.env.SECRET
      );

      const thepassword = decryptedpassword.toString(crypto.enc.Utf8);

      thepassword !== req.body.password &&
        res.status(401).json("Wrong password");

      const userToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "21d",
      });

      const { password, __v, createdAt, updatedAt, ...others } = user._doc;

      res.status(200).json({ ...others, token: userToken });
    } catch (error) {
      res.status(500).json("Failed to login, check the credentials");
    }
  },
};
