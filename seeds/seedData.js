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

