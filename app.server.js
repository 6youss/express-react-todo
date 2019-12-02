require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/routes");
const setupDatabase = require("./src/models");

setupDatabase()
  .then(() => {
    console.log("DB Connected.");
    /**
     * Start the server when DB is ready
     */

    // Middlewares
    app.use(cors());
    app.use(express.static("./public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    require("./src/config/passport")(app);
    // Routes
    app.use("/api", routes);

    app.listen(process.env.PORT, () => {
      console.log("App server listening on port " + process.env.PORT);
    });
  })
  .catch(error => {
    console.log(error);
  });
