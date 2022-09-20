
it('should calculate the monthly rate correctly', function() {
  const values = [10043,8,5.8];
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});


it("should return a result with 2 decimal places", function() {
  const values = [10043,8,5.8];
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it("should handle terribly high interest rates", function() {
  const values = [1000,40,99];
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});
