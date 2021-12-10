require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const { CONSTANTS } = require("./utils/constants");

//import routes
const authenticationRoutes = require("./routes/authentication");
const userRoutes = require("./routes/user");
const questionRoutes = require("./routes/question");
const opinionRoutes = require("./routes/opinion");
const voteRoutes = require("./routes/vote");

// PORT number
const PORT = CONSTANTS.port;

//Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", authenticationRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", questionRoutes);
app.use("/api/v1", opinionRoutes);
app.use("/api/v1", voteRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}...`);
});
