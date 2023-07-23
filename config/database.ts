import mongoose from "mongoose";
import env from "./env";

export const connectDB = async () => {
  try {
    if (!env.DB_URL) {
      throw new Error("No DB URL");
    }
    await mongoose.connect(env.DB_URL);
    console.log("Connected to the database.");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process with a failure code
  }
};
