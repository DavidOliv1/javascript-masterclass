// Por meio do destructuring podemos extrair valores de arrays e objetos de uma forma mais simples e direta.

// É possível extrair os valores de um array criando variáveis em ordem, de acordo com a posição de cada elemento.

// Podemos opcionalmente não pegar alguma variável, bastando para isso omitir seu nome e manter a virgula delimitadora. Obs: caso não quiséssemos a última variável, não precisaríamos da vírgula delimitadora.

// Assim como nas funções, é possível definir valores padrão para cada uma das variáveis, que somente serão levados em conta se não existir um valor naquela posição.

const language = "C;Dennis Ritchie".split(";");
const [name = "-", author = "-", year = "-"] = language;
console.log(name, author, year);
