// const { DataTypes } = require('sequelize');
// //we are having trouble importing the below file
// const db = require('../config/database');


// const Movie = db.define('Movie', {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   director: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   year: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   rating: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     defaultValue: 0
//   },
//   review: {
//     type: DataTypes.STRING,
//     allowNull: true
//   }
// });

// module.exports = Movie;


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    needed_funding: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'movie',
  }
);
module.exports = Movie;