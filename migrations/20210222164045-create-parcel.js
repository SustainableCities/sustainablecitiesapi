'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('greenops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hundredYearFlood: {
        type: Sequelize.STRING
      },
      asbestosExterior: {
        type: Sequelize.STRING
      },
      berdoHvacProjects: {
        type: Sequelize.STRING
      },
      berdoEnvelopeProjects: {
        type: Sequelize.STRING
      },
      acType: {
        type: Sequelize.STRING
      },
      tenant: {
        type: Sequelize.STRING
      },
      buildingAgeClass: {
        type: Sequelize.STRING
      },
      lastMajorRenovation: {
        type: Sequelize.STRING
      },
      parcelID: {
        type: Sequelize.STRING
      },
      heatType: {
        type: Sequelize.STRING
      },
      solar: {
        type: Sequelize.STRING
      },
      insulation: {
        type: Sequelize.STRING
      },
      roof: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('greenops');
  }
};