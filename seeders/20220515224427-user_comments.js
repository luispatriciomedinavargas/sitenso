'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('User_Comments', [{
       comment: 'wow this movie is very awosome!',
       user_id:1,
       movie_id:1
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('User_Comments', null, {});
  }
};
