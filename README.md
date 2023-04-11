# fullStack_lab1
The lab is a part of the university course full stack development

TASKS
1. Create git repository for the lab to publish your code.
2. Create a database and add a new collection of music albums. The Album
should at least have an id, title, artist name, and year. Add some albums to
your collection.
3. Create an .env file and add the PORT and the CONNECTION URL to it.( The
connection string should be there, hard coding it will not be accepted )
4. Create. gitignore file and add node_modules,. env, .vscode, .git to ignore
pushing them to github
5. Add a file to your project called “index.html”. When you start your Node.js
application, you shall be able to see it in your browser, i.e., going to
http://localhost:3000/ shall bring you to the “homepage” of your Node.js
server. In this page, you will show the data from the database you created
before. Read this for guidance
https://www.digitalocean.com/community/tutorials/use-expressjs-to-
deliver-html-files
6. Add CRUD operations to your REST API for the music albums collection.
You should be able to:
a. Show all albums (GET http://server:port/api/albums) should
return a JSON array with all the albums.
b. Retrieve a specific album by title (GET
http://server:port/api/albums/:title) should return a JSON object
with the attributes of the album
(for example, a JSON object for the album with the title= “Abbey
Road” should be returned if we used the URL
http://localhost:3000/api/albums/Abbey Road .
It can look like the following:
{
"id": 1,
"title": "Abbey Road",
"artist": "The Beatles",
"year": 1969
}
i. If the {title} is not found, an error message should be
returned as well as HTTP-status code 404.
ii. If more than one albums have the same title, all should be
returned
c. Create a new album (POST http://server:port/api/albums)
i. If the album is not added before (not found in the database),
the new album should be added to the database and a JSON
object of the newly added album should be returned as well
as HTTP-status code 201 (created).
ii. If the album already exists in the database, an error
message should be returned as well as HTTP-status code
409 (conflict).
d. Update an album (PUT http://server:port/api/albums/:id)
i. If the {id} is not found, an error message should be returned
as well as HTTP-status code 404.
e. Delete an album (DELETE
http://server:port/api/albums/:id)
i. If the {id} is not found, an error message should be
returned as well as HTTP-status code 404.
To read about different CRUD operations
https://www.apinewbies.com/api-request/
7. Populate your index.html file with the API data
(Remember to use JSON.stringify(data).)
(On this step do not use any frontend framework! )
a. Create a table that shows all the albums. It gets all the albums
from the API.
b. Each row has buttons for update, delete and show details.
i. Update will send the new edited album details to the API
which will send a put request to the server.
ii. Delete will delete the user and update the table afterwards.
It should have a confirmation dialog to confirm deletion.
c. Create a new album. This will send the new album details to the
API which will in return send a post request.
For the last step you can use Fetch or Axios.
Here is an example of how to use the Fetch API to retrieve data from your
RESTful API and display it on the page:
fetch("http://localhost:3000/albums")
.then(response => response.json())
.then(data => {
// Use the data to display albums on the page
})
.catch(error => {
console.error("Error fetching albums:", error);
});
GOOD LUCK
