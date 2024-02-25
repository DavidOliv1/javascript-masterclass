/* O formato de dados JSON é comumente utilizado para intercâmbio de dados e consiste
em transformar o dado de entrada em uma string. No console do vscode não fica tão evidente,
pois as aspas externas não são impressas, mas no REPL do node isso é mais facilmente 
visualizado. */

console.log(JSON.parse('10'));
console.log(JSON.parse('"JavaScript"'));
console.log(JSON.parse('true'));
console.log(JSON.parse('false'));
console.log(JSON.parse('{"name": "Self", "paradigm": "OO"}'));
console.log(JSON.parse('[1,2,3,4,5,6,7,8,9]'));
console.log(JSON.parse('null'));