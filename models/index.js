const User = require('./user');
const Movie = require('./movie');

User.hasMany(Movie, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Movie.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Movie };
