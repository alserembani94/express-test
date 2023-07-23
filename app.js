const express = require('express');
const app = express();
const connectDB = require('./config/database');
const env = require('./config/env');
const session = require('express-session');
const passport = require('passport');

// Initiate connection to DB
connectDB();

// Session middleware
app.use(
  session({
    secret: env.SESSION_SECRET,
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
require('./config/passport');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => {
  res.send("<h1 style='color: red;'>Hello</h1>");
})

// Routes
const studentRoutes = require('./app/routes/students');
const authRoutes = require('./app/routes/auth');
app.use('/students', studentRoutes);
app.use('/auth', authRoutes);

// Start the server
const port = env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});