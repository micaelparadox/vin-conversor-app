module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('cars', [
            {
                marca: 'Toyota',
                modelo: 'Camry',
                ano: 2020,
                software: 'Version 1.0',
                hardware: 'Version 2.0',
                longCoding: '1234abcd',
                chassis: '56789efg',
            },
            {
                marca: 'Honda',
                modelo: 'Accord',
                ano: 2019,
                software: 'Version 3.0',
                hardware: 'Version 4.0',
                longCoding: 'hijkmnop',
                chassis: 'qrstuvwx',
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('cars', null, {});
    }
};
