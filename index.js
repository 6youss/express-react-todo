const { PORT } = require("./src/values/strings");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/routes");

const setupDatabase = require("./src/models");

const session = require("express-session");
const passport = require("./src/middlewares/passport");

setupDatabase()
  .then(() => {
    console.log("DB Connected.");
    /**
     * Start the server when DB is ready
     */

    // Middlewares
    app.use(express.static("./public"));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(
      session({
        secret: "secret",
        saveUninitialized: false,
        resave: false
      })
    );
    app.use(passport.initialize());
    app.use(passport.session());

    // Routes
    app.use("/api", routes);

    app.listen(PORT, () => {
      console.log("server listening on port " + PORT);
    });
  })
  .catch(error => {
    console.log(error);
  });
