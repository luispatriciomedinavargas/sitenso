'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoriteMovies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FavoriteMovies.init({
    id: DataTypes.INTEGER,
    id_movie: DataTypes.INTEGER,
    id_user:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FavoriteMovies',
  });
  return FavoriteMovies;
};