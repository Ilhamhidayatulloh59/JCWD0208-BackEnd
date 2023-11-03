'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert("Users", users, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {})
  }
};
