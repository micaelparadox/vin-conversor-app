module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      ano: {
        type: Sequelize.INTEGER
      },
      software: {
        type: Sequelize.STRING
      },
      hardware: {
        type: Sequelize.STRING
      },
      longCoding: {
        type: Sequelize.STRING
      },
      chassis: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cars');
  }
};
