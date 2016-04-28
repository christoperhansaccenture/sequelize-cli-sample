"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('Users', {
        username: Sequelize.STRING,
        firstname: Sequelize.STRING,
        lastname: Sequelize.STRING
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('Users');
  }
};
