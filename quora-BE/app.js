require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

//import routes
const authenticationRoutes = require("./routes/authentication");
const userRoutes = require("./routes/user");

// PORT number
const PORT = 3000;

//Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", authenticationRoutes);
app.use("/api/v1", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}...`);
});
