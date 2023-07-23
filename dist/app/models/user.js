"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userStructure = {
    name: {
        type: String,
        required: true,
    },
};
// Define User schema
const userSchema = new mongoose_1.default.Schema(userStructure);
// Define User model
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
