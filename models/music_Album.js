const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    default: Date.now,
  },
});

module.exports = new mongoose.model("musics", musicSchema);
