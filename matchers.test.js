test('object assignment', () => {
  const obj = { first: 1 };
  obj['second'] = 2;
  expect(obj).toEqual({ first: 1, second: 2 });
});

test('object assignment - not equal', () => {
  const obj = { first: 1 };
  obj['second'] = 2;
  expect(obj).not.toEqual({ first: 1 });
});

test('array assignment - numbers', () => {
  const arr = [1, 3];
  arr.push(4)
  expect(arr).toEqual([1, 3, 4]);
});

test('array assignment - mixed', () => {
  const mixedArr = [1, 3];
  mixedArr.push('four')
  expect(mixedArr).toEqual([1, 3, 'four']);
});

test('array contains', () => {
  const mixedArr = [1, 3];
  mixedArr.push('four')
  expect(mixedArr).toContain(3);
});

test('adding floating point numbers', () => {
  expect(0.1 + 0.4).toBeCloseTo(0.5);
});

test('adding floating point numbers - not close to', () => {
  expect(0.1 + 0.4).not.toBeCloseTo(0.51);
});