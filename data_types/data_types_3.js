// Os tipos de dados na linguagem JavaScript se dividem em primitivos e objetos

// Os objetos são valores que representam uma referência em memória que pode ser alterada

console.log(
  typeof function sum(a, b) {
    return a + b;
  }
);
console.log(typeof { name: "Linus Torvalds" });
console.log(typeof [1, 2, 3, 4, 5, 6]);
console.log(typeof /[a-zA-Z]+/);
console.log(typeof new Date());
