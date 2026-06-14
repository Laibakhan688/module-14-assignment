const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use((req, res, next) => {
  console.log("Request Received");
  next();
});

// Controller
const getUser = (req, res) => {
  res.json({
    name: "John Doe",
    role: "Student"
  });
};

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Express Server"
  });
});

// User Route
app.get("/user", getUser);

// Login Route (Cookie)
app.get("/login", (req, res) => {
  res.cookie("user", "john");
  res.send("Cookie Set Successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});