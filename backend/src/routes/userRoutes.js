const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { serializeForRegistration } = require('../serializers/userSerializer');
const { serializeUserLogin } = require('../serializers/userSerializer');
// serializeUsers

const router = express.Router();

// Registration
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  
  
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

    const serializedUser = serializeForRegistration(newUser);

    res.status(201).json({ message: "User registered successfully", user: serializedUser });
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

    const serializedUser = serializeUserLogin(user);

    // logis success
    res.json({ message: "Login successful", user: serializedUser });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;