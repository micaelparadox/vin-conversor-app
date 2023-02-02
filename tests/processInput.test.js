const { processInput } = require('../utils');

describe('processInput', () => {
    it('should mix the long code and VIN correctly', () => {
        const longCode = '70FB6BA15021216C4777060860C5A90ED60A84E2600695773842F50952094B0B0000000012121212B835351919323200';
        const vin = 'WVWHE6AU4FW006026';
        const result = processInput(longCode, vin);
        expect(result.length).toBe(longCode.length);
    });
});

test("Long code and VIN match", () => {
    const longCode = "70FB6BA1502021724777060260C9A90ED60A84E2600695773842F50952094B0B0000000012121212B835351919323200";
    const vin = "WVWHE6AU4FW006026";

    const result = processInput(longCode, vin);
    expect(result.length).toBe(longCode.length + vin.length);
});

test("Long code and VIN do not match", () => {
    const longCode = "70FB6BA1502021724777060260C9A90ED60A84E2600695773842F50952094B0B0000000012121212B835351919323200";
    const vin = "WVWHE6AU4FW00602";

    expect(() => processInput(longCode, vin)).toThrow();
});
