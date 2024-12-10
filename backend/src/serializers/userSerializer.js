const User = require("../models/User");

// serializeUser without password
const serializeUser = (user, token=null) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    registerDate: user.registerDate,
    lastLoginDate: user.lastLoginDate,
    token,
  };
};

module.exports = {
  serializeUser,
};
