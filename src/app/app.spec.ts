import { App } from "./app";

describe('app file',()=>{
  const app=new App();
  it('its Should add',()=>{
    
    expect(app.add(2,3)).toBe(5);
  })

  //1.
  it('sumOfDigits for positive no',()=>{
    expect(app.sumOfDigits(123)).toBe(6);
  });


  //2
  it('factorial',()=>{
    expect(app.factorial(5)).toBe(120);
  });

  //3
  it('isPrime',()=>{
    expect(app.isPrime(7)).toBeTrue();
  });

  it('isNotPrime',()=>{
    expect(app.isPrime(10)).toBeFalse();
  });

  //5
  it('gcd',()=>{
    expect(app.gcd(48,18)).toBe(6);
  });

  //6
  it('reverse no',()=>{
    expect(app.reverseNumber(12345)).toBe(54321);
  });
})