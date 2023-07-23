"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oidc_1 = __importDefault(require("passport-google-oidc"));
const env_1 = __importDefault(require("./env"));
const federated_credentials_1 = __importDefault(require("../app/models/federated_credentials"));
const user_1 = __importDefault(require("../app/models/user"));
// Configure Google OAuth Strategy
passport_1.default.use(new passport_google_oidc_1.default({
    clientID: env_1.default.GOOGLE_CLIENT_ID,
    clientSecret: env_1.default.GOOGLE_CLIENT_SECRET,
    callbackURL: env_1.default.GOOGLE_CALLBACK_URL,
}, function (issuer, profile, cb) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log({ profile, issuer });
        // 1. Check if user exists in federated
        const federatedCredential = yield federated_credentials_1.default.findOne({
            provider: issuer,
            subject: profile.id,
        });
        if (!federatedCredential) {
            const newUser = yield user_1.default.create({ name: profile.displayName });
            const newFederatedCredential = yield federated_credentials_1.default.create({
                userId: newUser._id,
                provider: issuer,
                subject: profile.id,
            });
            return cb(null, newUser);
        }
        else {
            const existingUser = yield user_1.default.findById(federatedCredential.userId);
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
    });
}));
// Serialize user
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
// Deserialize user
passport_1.default.deserializeUser((user, done) => {
    done(null, user);
});
