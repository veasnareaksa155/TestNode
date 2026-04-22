const User = require("../models/User");

// CREATE
exports.registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// READ
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// LOGIN
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(401).json({ message: "Invalid login" });
  }

  res.json({ message: "Login success", user });
};