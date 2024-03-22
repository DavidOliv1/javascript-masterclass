// O tipo String é primitivo, imutável e é representado internamente pelo padrão Unicode, codificado em UTF-16

// Também é possível declarar uma String por meio da sua função construtora

// Entretanto, a função construtora é mais lenta e pode prejudicar a performance

let counter = 0;
console.time("performance");
while (counter < 100000) {
    "JavaScript";
    counter++;
}
console.timeEnd("performance");