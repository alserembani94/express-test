const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');
const env = require('./env');
const FederatedCredentials = require('../app/models/federated_credentials');
const User = require('../app/models/user');

// Configure Google OAuth Strategy
passport.use(new GoogleStrategy(
  {
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: env.GOOGLE_CALLBACK_URL
  },
  async function (issuer, profile, cb) {
    console.log({ profile, issuer });
    // 1. Check if user exists in federated
    const federatedCredential = await FederatedCredentials.findOne({ provider: issuer, subject: profile.id });
    if (!federatedCredential) {
      const newUser = await User.create({ name: profile.displayName });
      const newFederatedCredential = await FederatedCredentials.create({
        userId: newUser._id,
        provider: issuer,
        subject: profile.id,
      });

      return cb(null, newUser);
    } else {
      const existingUser = await User.findById(federatedCredential.userId);
      if (!existingUser) {
        return cb(null, false);
      }
      return cb(null, existingUser);
    }
    // 2. If error, cb(err)
    // 3. If no credential, insert new user
    // 4. If no credential, insert new federated
    // 5. If error, cb(null, user)
    // 6. If user exists in federated, return user
  }
));

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user
passport.deserializeUser((user, done) => {
  done(null, user);
});