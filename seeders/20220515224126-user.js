'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('User', [{
        email: 'correo@gmail.com',
        password:12345,
        isBetaMember: false
      }], {});
  
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('User', null, {});
     
  }
};
