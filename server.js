// express connected to front end
const express = require ("express");

// create an express server
const app = express();

// sets an initial port for listeners
const PORT = process.env.PORT || 3000;

// set Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});