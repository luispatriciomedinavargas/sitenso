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
    id: DataTypes.NUMBER,
    name_movie: DataTypes.STRING,
    id_user:DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'FavoriteMovies',
  });
  return FavoriteMovies;
};