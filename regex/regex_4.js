// O "." é um meta caractere, portanto se precisar de uma correspondência exata por ele, necessita ser escapado com: \.
let regExp = /john@gmail.com/;
let result = regExp.exec('john@gmailAcom');
let result1 = regExp.exec('john@gmailBcom');
let result2 = regExp.exec('john@gmailCcom');
console.log(result);
console.log(result1);
console.log(result2);

let regExp1 =  /john@gmail\.com/;
console.log(regExp1.test('john@gmailAcom'));
console.log(regExp1.test('john@gmail.com'));