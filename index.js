const express = require("express");
const app = express();
const usersRoute = require("./routes/users");
const communitiesRoute = require("./routes/communities");

app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.json({ message: "Server is running successfully" });
});

// Routes
app.use("/users", usersRoute);
app.use("/communities", communitiesRoute);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

module.exports = app; // for testing
