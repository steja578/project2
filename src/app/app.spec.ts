import { App } from "./app";

describe('apec file',()=>{
  it('its hsould add',()=>{
    const app=new App();
    expect(app.add(2,3)).toBe(5);
  })
})