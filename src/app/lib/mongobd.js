import mongoose from "mongoose";

export const connectMongoDB=async()=>{
try {
    await mongoose.connect(process.env.DATABASE_URL);
console.log("connected to database")
} catch (error) {
    console.log("error to connect mongodb",error)
}

};