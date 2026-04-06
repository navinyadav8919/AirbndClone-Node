'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('hotels', 'price_per_night');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('hotels', 'price_per_night', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    });
  }
};
