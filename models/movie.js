const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Movie = db.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  review: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Movie;

