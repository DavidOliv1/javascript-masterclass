const command = 'create table author (id number, name string, age number, city string, state string, country string)';

// Resolução 1

/* Forma de resolução inicial: funcional mas não reaproveitável, pois serviria somente para este caso por estar usando os caracteres
das palavras que deseja encontrar */

const tableName = command.match(/a\w+r/).join('');
const columns = command.match(/i.+g/).join('').split(', ');
console.log(tableName);
console.log(columns);

// Resolução 2

/* Com essa forma de resolução o código se torna reaproveitável, pois podemos reutilizá-lo para recuperar qualquer nome de tabela e
quaisquer colunas */

const statement = 'create table author (id number, name string, age number, city string, state string, country string)';
const regex = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statement.match(regex);
const tableName1 = parsedStatement[1];
const columns1 = parsedStatement[2].split(', ');
console.log(tableName1);
console.log(columns1);