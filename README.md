# 11-Express-Homework-Note-Taker

# Unit 11 Express Homework: Note Taker

## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The application frontend has already been created, it's your job to build the backend and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Approach
As the front end was already created, I needed to look at connecting this to the backend. I broke down the problem into smaller objectives:

* Start a server using Express
* Link the HTML to get and post requests in the backend JavaScript
* Write the user's notes to the server's JSON file with unique IDs
* The post method needs to write the note to the JSON file for retrieval
* The get method needs to retrieve notes from the server for viewing
* The delete method needs to locate and delete specific notes from the server

## Deploying the App

You will not be able to deploy your server side code on GitHub pages. This app should be deployed on Heroku. Carefully follow the [Heroku Guide](../04-Supplemental/HerokuGuide.md) for getting your app deployed on Heroku.

- - -
## Functionality:

You are required to submit the following:

* The URL of the Heroku repository:

  *** This should be the link to the url provided by Heroku. Be sure not to submit a link to the Heroku dashboard. ***

* The URL of the GitHub repository:

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.




Challenges
My first challenge arose at the very beginning of the project: understanding pathing with Express. I needed to complete my understanding of the usage of path.join and the meaning of __dirname, which required deep reading into documentation of the package. On completion I was able to successfully link the frontend content to the server.

My second challenge was then to write the user's notes to the server. As the JSON file already exists, I used the file system package to retrieve it, parsing the file in order to write the new note to it. This challenge follows into the need to store each note with a unique ID for the delete function. I needed a means to call the selected note in order to remove it from the array. To do this, every new note saved is given an ID equal to its position in the array to start. The idea is to rewrite these IDs to match each note's new position in the array when one entry is removed.

I struggled with finding a working method for the delete function. Eventually after some debugging I found the best method to remove a note using my unique IDs was to use a filter that would return an array with every entry except the entry I was looking for. By rewriting the unique IDs of each entry after the removal, I was able to ensure that every note's ID was equal to their position in the array, thus the delete function would remove only the selected note every time.

Another challenge I had was applying the * path in my get requests. When I tried to apply the * path for the index page, I found that it would override the other unique paths I had defined. Eventually I found out that the order of get requests reflects the order of precedence, so defining the * path first would prevent the other paths from working properly! In the end, moving this path to the end of my get requests solved the issue.