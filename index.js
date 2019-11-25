const { PORT } = require("./src/values/strings");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./src/routes");
/**
 * DB
 */
const setupDatabase = require("./src/models");

setupDatabase()
  .then(() => {
    /**
     * Start the server when DB is ready
     */

    app.set("view engine", "ejs");
    /**
     * Middlewares
     */
    app.use(express.static("./public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    /**
     * Routes
     */
    app.use("/", routes);

    app.listen(PORT, () => {
      console.log("server listening on port " + PORT);
    });
  })
  .catch(error => {
    console.log(error);
  });
