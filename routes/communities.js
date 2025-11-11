const express = require("express");
const router = express.Router();
const { users, communities } = require("./data");

router.get("/:id", (req, res) => {
  const community = communities.find((c) => c.id === parseInt(req.params.id));
  if (!community) {
    return res.status(404).json({ error: "Community not found" });
  }

  const memberDetails = community.members
    .map((id) => users.find((u) => u.id === id))
    .filter(Boolean);

  res.json({ ...community, members: memberDetails });
});

module.exports = router;
