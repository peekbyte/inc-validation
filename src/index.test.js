var index = require('./index.js');

test('Nationalcode must be valid', ()=>{
    expect(index.isValid('1111111111')).toBe(true);
})