import express from "express";
import { connectDB } from "./config/database";
import env from "./config/env";
import session from "express-session";
import passport from "passport";

const app = express();
// Initiate connection to DB
connectDB();

if (!env.SESSION_SECRET) {
  console.warn(
    "No session secret found. Please add SESSION_SECRET to the .env for security purpose."
  );
}

// Session middleware
app.use(
  session({
    secret: env.SESSION_SECRET || "",
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true },
  })
);

// Passport middleware
app.use(passport.initialize());
// app.use(passport.authenticate('session'));
app.use(passport.session());

// Require and use the Passport configuration
require("./config/passport");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("<h1 style='color: red;'>Hello</h1>");
});

// Routes
import studentRoutes from "./app/routes/students";
import authRoutes from "./app/routes/auth";
app.use("/students", studentRoutes);
app.use("/auth", authRoutes);

// Start the server
const port = env.PORT;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
