let regExp = /^john@gmail.com$/;
console.log(regExp.exec('john@gmail.com...'));
console.log(regExp.exec('...john@gmail.com'));
console.log(regExp.exec('john@gmail.com'));