require('dotenv').config();

const sequelize = require('../config/connection');
const { User, Movie } = require('../models');

const userData = require('./userData.json');
const movieData = require('./movieData.json');


const apiKey = process.env.API_KEY;

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

// //movie search function//

function searchMovies() {
  const url = `http://www.omdbapi.com/?s=jack&apikey=${apiKey}&`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === `False`) {
        console.log(data.Error);
      } else {
        const movies = data.Search;

        Movie.bulkCreate(
          movies.map((movie) => {
            return {
              name: movie.Title,
              year: movie.Year,
              imdbID: movie.imdbID,
            };
          })
        );
      }
    })
    .catch((error) => console.error(error));
}
seedDatabase();

searchMovies();

