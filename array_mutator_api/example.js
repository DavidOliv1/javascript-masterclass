// A função de comparação deve seguir algumas especificidades para funcionar de forma correta. Da documentação oficial, temos:

/* the comparator is expected to have the following properties, in order to ensure proper sort behavior:

Pure: The comparator does not mutate the objects being compared or any external state. (This is important because there's no guarantee when and how the comparator will be called, so any particular call should not produce visible effects to the outside.)
Stable: The comparator returns the same result with the same pair of input.
Reflexive: compareFn(a, a) === 0.
Anti-symmetric: compareFn(a, b) and compareFn(b, a) must both be 0 or have opposite signs.
Transitive: If compareFn(a, b) and compareFn(b, c) are both positive, zero, or negative, then compareFn(a, c) has the same positivity as the previous two.
A comparator conforming to the constraints above will always be able to return all of 1, 0, and -1, or consistently return 0. For example, if a comparator only returns 1 and 0, or only returns 0 and -1, it will not be able to sort reliably because anti-symmetry is broken. A comparator that always returns 0 will cause the array to not be changed at all, but is reliable nonetheless. */

// No exemplo abaixo, temos que nossa função de comparação sempre retorna -1, não satisfazendo as propriedades acima e funcionando de forma diferente a depender da engine utilizada. Veja que, considerando a documentação oficial, quando o valor retornado da função de comparação for negativo, 'a' deve vir antes de 'b', ou seja, o array permaneceria inalterado, mas não é o que acontece no exemplo em questão.

const languages = ["Python", "C", "Java"];
console.log(languages);
console.log(
  languages.sort(function (a, b) {
    return -1;
  })
);

console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);
