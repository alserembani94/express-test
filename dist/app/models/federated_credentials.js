"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const federatedCredentialsStructure = {
    userId: String,
    provider: String,
    subject: String,
};
// Define User schema
const federatedCredentialsSchema = new mongoose_1.default.Schema(federatedCredentialsStructure);
// Define User model
const FederatedCredentials = mongoose_1.default.model("FederatedCredentials", federatedCredentialsSchema);
exports.default = FederatedCredentials;
