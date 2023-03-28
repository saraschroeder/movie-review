# Project #2 - Movie Reviews


![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
## Description
This is a real world full stack application that uses node.js and express.js to create a restful API and uses handlebars.js as the templating engine. MySQL and Sequelize ORM are used for database. We utilize GET and POST routs to retrieve and add new data.
 
## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
## Installation
This is a fully deployed application hosted on Heroku. No installation needed. Simply visit the application at the deployed URL.

## Usage
Someone can use this application by searching the data base of movies and leaving reviews of it, or they can look up a movie that they want to watch to read reviews before they spend the time to watch it. 

---------------------------------------------------------------------------------------------------------------------------------------------------


here is a great place for you to upload screen shots or even a screen record of your application.  But remember to delete this line of text first


---------------------------------------------------------------------------------------------------------------------------------------------------
## Contributions 
[Sara Schroeder](https://github.com/saraschroeder);
[Jonah Kane](https://github.com/jonahkane);
[Abigail Personius](https://github.com/apersonius);
[Huda Yusuf](https://github.com/hyusuff)


## Tests 
npm run tests can be used if the application is being accessed locally from a CLI
## License 
MIT License

(https://opensource.org/licenses/MIT)

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

## Questions
If you have questions on this project you can find me on Github at [Sara Schroeder](https://github.com/saraschroeder);
[Jonah Kane](https://github.com/jonahkane);
[Abigail Personius](https://github.com/apersonius);
[Huda Yusuf](https://github.com/hyusuff)

or please feel free to email one of us at:


-*/-*/-*/-*/-*/-*/-*-*/-*-*/-*/-*/-*/
came from index.js file within the seeds folder 

const mongoose = require('mongoose');
const Movie = require('../models/movie');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/movie-review', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//placeholder movies?
const movies = [
  { title: 'The Shawshank Redemption', director: 'Frank Darabont', yearReleased: 1994 },
  { title: 'The Godfather', director: 'Francis Ford Coppola', yearReleased: 1972 },
  { title: 'The Godfather: Part II', director: 'Francis Ford Coppola', yearReleased: 1974 },
  { title: 'The Dark Knight', director: 'Christopher Nolan', yearReleased: 2008 },
  { title: '12 Angry Men', director: 'Sidney Lumet', yearReleased: 1957 }
];

Movie.create(movies)
  .then(() => {
    console.log('Database seeded successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('Error seeding database:', err);
    mongoose.connection.close();
  });


  //did not touch this file 
  -*/-*/-*/-*/-*/-*/-*-*/-*-*/-*/-*/-*/



  -*/-*/-*/-*/-*/-*/-*-*/-*-*/-*/-*/-*/
came from seedData.js file within the seeds directory
  const db = require("../models");

db.sequelize.sync({ force: true }).then(async () => {
  try {
    
    const movies = await db.Movie.bulkCreate([
      { title: "Finding Nemo", year: 2003, genre: "Adventure" },
      { title: "Step Brothers", year: 2008, genre: "Comedy" },
      { title: "Moana", year: 2016, genre: "Animation" }
    ]);

    
    const users = await db.User.bulkCreate([
      { username: "john_doe", email: "john.doe@example.com", password: "password1" },
      { username: "jane_doe", email: "jane.doe@example.com", password: "password2" }
    ]);

    
    await db.Review.bulkCreate([
      { rating: 7.0, reviewText: "Subpar movie, could have been better. Felt like it went in circles", movieId: movies[0].id, userId: users[0].id },
      { rating: 10.0, reviewText: "A true masterpiece.", movieId: movies[1].id, userId: users[1].id },
      { rating: 6.0, reviewText: "Good movie for kids, felt as if they tried too hard to make it good and it drug on too long.", movieId: movies[2].id, userId: users[0].id }
    ]);

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
});

// did not touch this file

  -*/-*/-*/-*/-*/-*/-*-*/-*-*/-*/-*/-*/






  // const express = require('express');
// const handlebars = require('express-handlebars');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const dotenv = require('dotenv').config();
// const path = require('path');

// //api key
// const apiKey = process.env.API_KEY;

// dotenv.config();

// const app = express();

// app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.post('/review', (req, res) => {

// });

// app.listen(process.env.PORT || 3000, () => {
//   console.log(`Server listening on port ${process.env.PORT || 3000}`);
// });


// //movie search function//

// function searchMovies(query) {
//   const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       if(data.Response === `False`) {
//       console.log(data.Error);
//     } else {
//       const movies = data.Search;

//       //i think this is how we put them into our db?
//       movies.forEach(movie => {
//         const sql = `
//           //INSERT INTO movies (title, year, type, poster)
//           //VALUES (?, ?, ?, ?)
//           `;
//           const values = [movie.Title, movie.Year, movie.Type, movie.Poster];
//           Connection.query(sql, values, (error, results, fields) => {
//             if (error) {
//               console.error(error);
//             } else {
//               console.log('Inserted movie:', movie.Title);
//             }
//           });
//       });

// //previous API results getting sent to index.html
//       //const movieList = document.getElementById('movieList');

//       //movieList.innerHTML = '';

//       //movies.forEach(movie => {
//       //  const li = document.createElement('li');
//        // li.textContent = movie.Title;
//       //  movieList.appendChild(li);
//       //});
//     }
//   })
//   .catch(error => console.error(error));
// }

// const searhForm = document.getElementById('searchForm');
// searhForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const searchInput = document.getElementById('searchInput');
//   const query = searchInput.value;
//   searchMovies(query);
// });

