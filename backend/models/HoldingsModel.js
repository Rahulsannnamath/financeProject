const holdingsSchema = require("../schemas/holdingsSchema");
const mongoose = require("mongoose");

const holding =  mongoose.model("holding",holdingsSchema);

module.exports = holding;