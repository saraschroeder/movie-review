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



const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#movie-name').value.trim();
  const needed_funding = document.querySelector('#movie-funding').value.trim();
  const description = document.querySelector('#movie-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/movies`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create movie');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/movies/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete movie');
    }
  }
};

document
  .querySelector('.new-movie-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.movie-list')
  .addEventListener('click', delButtonHandler);