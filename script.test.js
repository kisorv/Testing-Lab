// const { convertCtoF, convertFtoC } = require("./script");

// describe("Temperature convertor", () => {
//   it("should convert C to F when C", () => {
//     //call a function
//     const convertedVal = convertCtoF(-25);
//     expect(convertedVal).toBe(-13);
//   });
// });

// describe("convertFtoC", () => {
//   it("should convert F to C when F is positive", () => {
//     //call a function
//     const convertedVal = convertFtoC(32);
//     expect(convertedVal).toBe(0);
//   });
// it("should only accept numbers", ()=>{
//     const convertedVal = convertFtoC("nan");
//     expect(convertedVal).toBeNaN();
// });
// it("should convert F to C when F is negative", () => {
//     //call a function
//     const convertedVal = convertFtoC(-10);
//     expect(convertedVal).toBe(-23);
//   }); 
// });

const { tempFahr, eventType } = require("./script");
describe("convertFtoC", () => {
      it("should convert F to C when F is positive", () => {
        //call a function
        const convertedVal = convertFtoC(32);
        expect(convertedVal).toBe(0);
      });

