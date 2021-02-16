const express = require("express");
require("dotenv").config();
const db = require("./models");

//const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes, both API and view
//app.use(routes);



// Requiring passport as we've configured it
//const passport = require("./config/passport");

// session is middleware related to user-session and authentication 
//const session = require("express-session");

// We need to use sessions to keep track of our user's login status
// app.use(
//     session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());


//Successfully connected to MySQL db via sequelize
//Next, create some models and controllers to begin testing the API


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`==> 🌎  Listening on port ${PORT}.`);
    });
    //For testing DB connection via sequelize. Can delete 
    db.sequelize.authenticate();
    console.log('Sequelize Connection has been established successfully.');

});
