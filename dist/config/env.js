"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const envList = [
    "PORT",
    "SESSION_SECRET",
    "DB_URL",
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
    "GOOGLE_CALLBACK_URL",
];
const env = process.env;
exports.default = env;
