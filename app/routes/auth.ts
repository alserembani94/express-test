import express from "express";
import passport from "passport";
const router = express.Router();

router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["email", "profile", "openid"] })
);
router.get(
  "/redirect/google",
  passport.authenticate("google", {
    failureRedirect: "/auth/login",
    successRedirect: "/",
    failureMessage: true,
  })
);

router.post("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      res.status(500).send("Internal Server Error");
    }

    res.redirect("/");
  });
});

export default router;
