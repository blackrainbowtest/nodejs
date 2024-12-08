const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// Registration
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  
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

    res.status(201).json(newUser);
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

    // logis success
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;