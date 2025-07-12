const mongoose = require("mongoose");
const positionsSchema = require("../schemas/positionsSchema");

const position = mongoose.model("position",positionsSchema);

module.exports = position;