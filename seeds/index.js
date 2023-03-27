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