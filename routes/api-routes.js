let db = require("../db/db.json");
const fs = require("fs");

module.exports = function(app) {
    //GET /api/notes - Should read the db.json file and return all saved notes as JSON.
    app.get("/api/notes", function(req, res) {
        console.log("hello");
        fs.readFileSync("../db/db.json", db);
        res.json(db);
    });
    //POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    app.post("/api/notes", function(req, res){
        //look into uuid for setting a unique id
        //make a new note, with new unique id
        //push the newNote to db
        //write the new note to the json
        res.json(db); 
    })

    //DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
    app.delete("/api/notes/:id", function(req, res){
        //read the db.json
        //set the id param to a variable
        //make a function to compare if the not exists, if exists splice out of array
        //write a file with the new notes

        return res.json(db);
    })
}