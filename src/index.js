var hasCode = code => !code || !code.length ? false : true;

var isValid = code => {
    if (this.hasCode(code))
        return false;

    const c = parseInt(code.charAt(9));

    const n = parseInt(code.charAt(0)) * 10 +
            parseInt(code.charAt(1)) * 9 +
            parseInt(code.charAt(2)) * 8 +
            parseInt(code.charAt(3)) * 7 +
            parseInt(code.charAt(4)) * 6 +
            parseInt(code.charAt(5)) * 5 +
            parseInt(code.charAt(6)) * 4 +
            parseInt(code.charAt(7)) * 3 +
            parseInt(code.charAt(8)) * 2;

    const r = n - parseInt((n / 11).toString()) * 11;

    if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
        return true;
    }
    return false;
}

module.exports = {
    isValid: isValid
}