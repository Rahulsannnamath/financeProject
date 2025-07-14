require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;
const HoldingsModel = require("./models/HoldingsModel");
const positionsModel = require("./models/postionsModel");
const orderModel = require("./models/OrderModel");
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
async function main() {
    try{
        const connection = await mongoose.connect(process.env.MONGO_ATLAS);
        console.log("database is connected");
    }
    catch(err){
        console.log(err);
    }
}


app.use(express.json());
app.use(cors({
    origin:[ "http://localhost:5173", "http://localhost:3000","https://fincrux-dashboard.onrender.com","https://fincrux-frontend.onrender.com"],
    credentials: true  
  }));
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

app.listen(PORT,()=>{
    console.log(`server is at ${PORT}`);
});

main();

app.use("/",authRoute);

app.get("/allholdings",async (req,res)=>{
let holdings = await HoldingsModel.find({});
res.json(holdings);

});


app.get("/allpositions",async (req,res)=>{
    let positions = await positionsModel.find({});
    res.json(positions);
    
});

app.post("/newOrder",async (req,res)=>{
let {name , qty , price , mode} = req.body;
let newOrder = new orderModel({
name,
qty,
price,
mode
});

await newOrder.save();
// await HoldingsModel.insertOne({name , qty , price , net:"+0.05" , day:"+2.99%" , isLoss : false , avg: 4727});
res.send("order placed");
});

app.get("/showOrders", async (req,res)=>{
let orders = await orderModel.find({});
res.json(orders);
});


app.get("/logout", (req, res) => {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "None", // or "Lax"
      secure: true,       // only if using HTTPS
    });
    res.status(200).json({ message: "Logged out successfully" });
  });

  app.get('/health', (req, res) => {
    res.status(200).send("testing");
  });
  