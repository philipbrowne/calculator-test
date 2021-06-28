describe('calculateMonthlyPayment tests', function () {
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 0.045
  }
  expect(calculateMonthlyPayment(values)).toEqual('103.64')
});
it('should return a result with 2 decimal places', function() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 0.045
  }
  const decimalpoints = calculateMonthlyPayment(values).split('.')[1]
  expect(decimalpoints.length).toEqual(2);
});
it('should return a number', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 0.045
  }
  const number = parseFloat(calculateMonthlyPayment(values))
  expect(typeof(number)).toBe('number');
});
})

