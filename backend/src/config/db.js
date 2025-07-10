import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    console.log("Connecting to DB:", ENV.MONGO_URI ? "URI Set" : "URI Missing");
    await mongoose.connect(ENV.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection error:", {
      message: error.message,
      stack: error.stack,
    });
    throw error;
  }
};