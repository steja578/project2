import { App } from "./app";

describe('app file',()=>{
  const app=new App();
  it('its Should add',()=>{
    
    expect(app.add(2,3)).toBe(5);
  })

  it('sumOfDigits',()=>{
    

  })

})