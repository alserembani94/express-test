import mongoose from "mongoose";

const userStructure = {
  name: {
    type: String,
    required: true,
  },
};

// Define User schema
const userSchema = new mongoose.Schema(userStructure);

// Define User model
const User = mongoose.model("User", userSchema);

export default User;
