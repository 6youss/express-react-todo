require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./src/routes/auth");
const setupDatabase = require("./src/models");

setupDatabase().then(() => {
  console.log("DB Connected.");
  /**
   * Start the server when DB is ready
   */

  // Middlewares
  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  require("./src/config/passport")(app);

  // Routes
  app.use("/api", authRoutes);

  app.listen(process.env.AUTH_PORT, () => {
    console.log("Auth server listening on port " + process.env.AUTH_PORT);
  });
});
