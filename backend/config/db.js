// const mongoose = require("mongoose");
import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    }catch(err){
        console.log("MongoDB connected");
        process.exit(1);
    }
};

export default connectDB;