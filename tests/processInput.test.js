const { processInput } = require('../utils');

describe('processInput', () => {
    it('should mix the long code and VIN correctly', () => {
        const longCode = '70FB6BA15021216C4777060860C5A90ED60A84E2600695773842F50952094B0B0000000012121212B835351919323200';
        const vin = 'WVWHE6AU4FW006026';
        const result = processInput(longCode, vin);
        expect(result.length).toBe(longCode.length);
    });
});
