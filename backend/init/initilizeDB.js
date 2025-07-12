const { watchlist, positions, holdings } = require('./data');
const holdingsModel = require("../models/HoldingsModel");
const positionsModel = require("../models/postionsModel");
const mongoose = require("mongoose");
async function main() {
    try{
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/zerodha');
        console.log("database is connected");
    }
    catch(err){
        console.log(err);
    }
}

main();

async function init(){
await holdingsModel.insertMany(holdings);
console.log("data inserted successfully");
}

init();