const Sequelize = require('sequelize');

// Connect to the database
const sequelize = new Sequelize('micael', 'micael', 'pastel', {
    host: 'localhost',
    dialect: 'postgres'
});

// Test the connection
sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
