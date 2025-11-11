const express = require("express");
const router = express.Router();
const { users } = require("./data");

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  const { name, role } = req.body;
  if (!name || !role) {
    return res.status(400).json({ error: "Name and role are required" });
  }
  const newUser = {
    id: users.length + 1,
    name,
    role,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
