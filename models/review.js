const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Review = db.define('Review', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Review;
