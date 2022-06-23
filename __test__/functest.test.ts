
// import { sum } from "./functest";
const sum=require('../functest')
describe('practice test',()=>{
    test('should return sum as 5',()=>{
        const num1=5;
        const num2=10;
    
        const resp=sum(num1,num2);
        const expval=num1+num2;
        expect(resp).toBe(expval)
    
    })           
});
