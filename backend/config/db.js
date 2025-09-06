import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ DATABASE CONNECTED");
  } catch (err) {
    console.error("❌ DATABASE CONNECTION FAILED: ", err.message);
    process.exit(1);
  }
};
