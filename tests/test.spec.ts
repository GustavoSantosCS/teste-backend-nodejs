describe('Test Unit if jest is ok', () => {
  it('Should pass', () => {
    const num1 = 1;
    const num2 = 1;

    expect(num1).toBe(num2);
  });

  it('Should not pass', () => {
    const num1 = 1;
    const num2 = 2;

    expect(num1).toBe(num2);
  });
});
