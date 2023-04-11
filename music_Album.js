const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({});

module.exports = new mongoose.model("Music", musicSchema);
