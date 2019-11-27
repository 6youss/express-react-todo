const { PORT } = require("./src/values/strings");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const routes = require("./src/routes");
const setupDatabase = require("./src/models");

setupDatabase()
  .then(() => {
    console.log("DB Connected.");
    /**
     * Start the server when DB is ready
     */

    // Middlewares
    const corsOptions = {
      origin: "http://localhost:3000",
      credentials: true,
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    };
    app.use(cors(corsOptions));
    app.use(express.static("./public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(
      session({
        secret: "zsoft",
        resave: false,
        saveUninitialized: true
      })
    );
    require("./src/config/passport")(app);

    // Routes
    app.use("/api", routes);

    app.listen(PORT, () => {
      console.log("server listening on port " + PORT);
    });
  })
  .catch(error => {
    console.log(error);
  });
