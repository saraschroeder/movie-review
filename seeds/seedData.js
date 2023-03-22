const db = require("../../models");

db.sequelize.sync({ force: true }).then(async () => {
  try {
    
    const movies = await db.Movie.bulkCreate([
      { title: "The Shawshank Redemption", year: 1994, genre: "Drama" },
      { title: "The Godfather", year: 1972, genre: "Crime" },
      { title: "The Dark Knight", year: 2008, genre: "Action" }
    ]);

    
    const users = await db.User.bulkCreate([
      { username: "john_doe", email: "john.doe@example.com", password: "password1" },
      { username: "jane_doe", email: "jane.doe@example.com", password: "password2" }
    ]);

    
    await db.Review.bulkCreate([
      { rating: 8.5, reviewText: "One of the best movies of all time.", movieId: movies[0].id, userId: users[0].id },
      { rating: 9.0, reviewText: "A true masterpiece.", movieId: movies[1].id, userId: users[1].id },
      { rating: 7.5, reviewText: "Great action and performances.", movieId: movies[2].id, userId: users[0].id }
    ]);

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
});

