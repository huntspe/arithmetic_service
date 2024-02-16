const { add } = require('./arithmetica');

test('add 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('add 2 + 3 to not equal 6', () => {
    expect(add(2, 3)).not.toBe(6);
    });


// test with VERY LARGE NUMBERS
test('add 100000000000000000000000000 + 100000000000000000000000000 to equal 200000000000000000000000000', () => {
    expect(add(100000000000000000000000000, 100000000000000000000000000)).toBe(200000000000000000000000000);
    });
