const replacePosition = (replacementValue, originalString, start, end) => {
    return (
        originalString.slice(0, start) +
        replacementValue +
        originalString.slice(end)
    );
};

const getSumHex = (decimalDigit, sumDigit) => {
    decimalDigit = parseInt(decimalDigit, 10);
    const hexValue = decimalDigit.toString(16).toUpperCase();
    const result = (parseInt(hexValue, 16) + parseInt(sumDigit, 16)).toString(
        16
    );
    return result.padStart(2, '0');
};

const processInput = (longCode, vin) => {
    const dig13 = vin[12];
    const dig14 = vin[13];
    const dig15 = vin[14];
    const dig16 = vin[15];
    const dig17 = vin[16];

    let longCodeConverted = replacePosition(
        getSumHex(dig13, '20'),
        longCode,
        10,
        12
    );
    longCodeConverted = replacePosition(
        getSumHex(dig14, '6C'),
        longCodeConverted,
        14,
        16
    );
    longCodeConverted = replacePosition(
        getSumHex(dig15, '77'),
        longCodeConverted,
        18,
        20
    );
    longCodeConverted = replacePosition(
        getSumHex(dig16, '00'),
        longCodeConverted,
        22,
        24
    );
    longCodeConverted = replacePosition(
        getSumHex(dig17, 'C3'),
        longCodeConverted,
        26,
        28
    );

    return longCodeConverted;
};

module.exports = {
    processInput
};
