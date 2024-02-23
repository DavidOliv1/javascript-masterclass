console.log(/john@gmail.com/);
console.log(typeof /john@gmail.com/);
console.log(new RegExp("john@gmail.com"));

let regExp = /^john@gmail\.com$/;
// let result = regExp.test("john@gmail.com");
let result = regExp.exec("john@gmail.com");
console.log(result);
