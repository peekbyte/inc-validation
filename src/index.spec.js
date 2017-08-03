var index = require('./index.js');

test('Nationalcode must be valid', ()=>{
    expect(index.isValid('1111111111')).toBe(true);
});

test('Nationalcode must not be valid', ()=>{
    expect(index.isValid('7512698452')).toBe(false);
});