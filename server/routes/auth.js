const router = require("express").Router();
const User = require("../models/user");
const verifyToken = require("../middlewares/verify-token")
const AuthenticationControllerPolicy = require("../Policies/AuthenticationControllerPolicy")

const jwt = require("jsonwebtoken");

/* Register Route */

router.post("/auth/signup", AuthenticationControllerPolicy, async (req, res) => {
    try {
      let newUser = new User();
      newUser.fullName = req.body.fullName;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      await newUser.save();
      let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
        expiresIn: 604800, // 1 week
      });

      res.json({
        success: true,
        token: token,
        message: "You have sucessfully signed up."
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "This email address is already in use. Please use another emial address.",
      });
    }
});

/* Profile Route */
router.get("/auth/user", verifyToken, async (req, res) => {
  try {
    let foundUser = await User.findOne({ _id: req.decoded._id }).populate(
      "address"
    );
    if (foundUser) {
      res.json({
        success: true,
        user: foundUser,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
/* Update a profile */
router.put("/auth/user",AuthenticationControllerPolicy, verifyToken, async (req, res) => {
  try {
    let foundUser = await User.findOne({ _id: req.decoded._id });

    if (foundUser) {
      if (req.body.fullName) foundUser.fullName = req.body.fullName;
      if (req.body.email) foundUser.email = req.body.email;
      if (req.body.password) foundUser.password = req.body.password;

      await foundUser.save();

      res.json({
        success: true,
        message: "Successfully updated"
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});
/*Login Route */

router.post("/auth/login", async (req, res) => {
  try {
    let foundUser = await User.findOne({ email: req.body.email });
    if (!foundUser) {
      res.status(403).json({
        success: false,
        message: "Authentication failed, User not found"
      });
    } else {
      if (foundUser.comparePassword(req.body.password)) {
        let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
          expiresIn: 604800 // 1 week
        });

        res.json({ success: true, token: token });
      } else {
        res.status(403).json({
          success: false,
          message: "Authentication failed, Wrong password!"
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});
module.exports = router;
