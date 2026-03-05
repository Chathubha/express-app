const userRepository = require("../repositories/userRepository");

exports.createUser = async (req, res) => {
  try {
    const user = await userRepository.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await userRepository.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await userRepository.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userRepository.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await userRepository.deleteUser(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};