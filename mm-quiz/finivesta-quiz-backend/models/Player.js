const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    organization: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", PlayerSchema);
