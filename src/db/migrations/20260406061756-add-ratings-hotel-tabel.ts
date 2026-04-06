'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE hotels
      ADD COLUMN rating DECIMAL(3, 2) DEFAULT NULL,
      ADD COLUMN rating_count INT DEFAULT NULL;
    `);
  },

  async down (queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE hotels
      DROP COLUMN rating,
      DROP COLUMN rating_count;
    `);
  }
};
