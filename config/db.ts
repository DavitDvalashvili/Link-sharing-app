import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    if (MONGO_URI) {
      await mongoose.connect(MONGO_URI);
      console.log("MongoDB connected successfully");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(`ERROR: ${error.message}`);
    } else {
      console.log("An unknown error occurred while Connecting MongoDB");
    }
    process.exit(1);
  }
};

export default connectDB;
