'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('FavoriteMovies', [{
         name_movie: 'Dune',
         id_user:1
       }], {});
     
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('FavoriteMovies', null, {});
  }
};
