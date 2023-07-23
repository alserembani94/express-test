"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const env_1 = __importDefault(require("./config/env"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const app = (0, express_1.default)();
// Initiate connection to DB
(0, database_1.connectDB)();
if (!env_1.default.SESSION_SECRET) {
    console.warn("No session secret found. Please add SESSION_SECRET to the .env for security purpose.");
}
// Session middleware
app.use((0, express_session_1.default)({
    secret: env_1.default.SESSION_SECRET || "",
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true },
}));
// Passport middleware
app.use(passport_1.default.initialize());
// app.use(passport.authenticate('session'));
app.use(passport_1.default.session());
// Require and use the Passport configuration
require("./config/passport");
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (_, res) => {
    res.send("<h1 style='color: red;'>Hello</h1>");
});
// Routes
const students_1 = __importDefault(require("./app/routes/students"));
const auth_1 = __importDefault(require("./app/routes/auth"));
app.use("/students", students_1.default);
app.use("/auth", auth_1.default);
// Start the server
const port = env_1.default.PORT;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
