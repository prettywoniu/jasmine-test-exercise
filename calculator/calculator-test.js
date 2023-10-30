
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 300000, years: 30, rate: 4.5})).toEqual('1520.06');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 2500000, years: 30, rate: 6.7})).toEqual('16131.95');
});

/// etc
