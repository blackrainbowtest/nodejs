const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { serializeUser } = require("../serializers/userSerializer");

const jwt = require("jsonwebtoken");
const SECRET_KEY = "tumo_labs_project";
// serializeUsers

const router = express.Router();

// Registration
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(req.body, "sended user data")
  try {
    // is new user
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      registerDate: new Date(),
      lastLoginDate: new Date(),
    });

    const serializedUser = serializeUser(newUser);

    res
      .status(201)
      .json({ message: "User registered successfully", user: serializedUser });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // email check
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // password check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // create new token
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    // net new lastLoginDate
    user.lastLoginDate = new Date();
    await user.save();

    // add token to response
    const serializedUser = { ...serializeUser(user), token: token };
    
    // logis success
    res.json({ message: "Login successful", user: serializedUser });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// login with token
router.post("/token", async (req, res) => {
  
  // get token from header
  const authHeader = req.headers.authorization;
  // split token from header
  const token = authHeader && authHeader.split(" ")[1];

  try {
    // decoding token
    const decoded = jwt.verify(token, SECRET_KEY);
    
    // try to find user with id
    const user = await User.findOne({ where: { id: decoded.id } });
    if (!user) {
      return res.status(400).json({ message: "Invalid token" });
    }

    // get user data
    const serializedUser = serializeUser(user);
    res.json({ message: "Token is valid", user: serializedUser });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Token is invalid or expired" });
  }
});

module.exports = router;
