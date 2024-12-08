const User = require("../models/User");

// serializeUser without password
const serializeUserLogin = (user) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    registerDate: user.registerDate,
    lastLoginDate: user.lastLoginDate,
  };
};

// all users
const serializeUsers = (users) => {
  return users.map(serializeUserLogin);
};

// registration without password and last login date
const serializeUserRegistration = (user) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    registerDate: user.registerDate,
  };
};

module.exports = {
  serializeUserLogin,
  serializeUserRegistration,
  serializeUsers
};
