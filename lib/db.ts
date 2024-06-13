import { connect } from "http2";
import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log('sucessfuly connected to mongo DB');

    } catch (error:any) {
        console.error(`Error: ${error.message}`);
        process.exit(1)
    }
}

export default connectDB