"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
router.get("/login/google", passport_1.default.authenticate("google", { scope: ["email", "profile", "openid"] }));
router.get("/redirect/google", passport_1.default.authenticate("google", {
    failureRedirect: "/auth/login",
    successRedirect: "/",
    failureMessage: true,
}));
router.post("/logout", function (req, res) {
    req.logout(function (err) {
        if (err) {
            res.status(500).send("Internal Server Error");
        }
        res.redirect("/");
    });
});
exports.default = router;
