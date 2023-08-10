const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String, default: "Shezhen China" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UsersSchema);
