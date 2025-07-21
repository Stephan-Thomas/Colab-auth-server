import mongoose from "mongoose";
import config from "./config.js";


async function connectDb(){
    try {
        await mongoose.connect(config.database.mongoDb.url)
        console.log(`${config.env} db connected successfully`)
    } catch (error) {
        console.log(`error occured connecting,${error?.message?error.message:error}`)
    }
}

export default connectDb;