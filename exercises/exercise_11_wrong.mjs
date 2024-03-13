import { Database } from "./database_1.mjs";

// A implementação abaixo, apesar de parecer a primeira vista funcional, não é correta, tendo em vista que as operações abaixo devem ser executadas de forma sequencial, ou seja, primeiro devemos ter a crição da tabela no banco, depois a inserção dos registros, e por último o select. Porém, temos que os passos abaixos estão sendo executados de forma independente, e não encadeados em um .then, como deveriam. Num projeto real, não artificialmente atrasado com um setTimeout, em que o tempo da operação varia, poderia acontecer de a criação da tabela não ser resolvida antes da inserção dos dados e isso quebrar a aplicação. Portando, as operações que dependem da anterior devem ser encadeadas como mostra o 'exercise_11.mjs'. Um outro erro do código abaixo diz respeito ao tratamento de erro da função execute caso a promessa seja rejeitada. Perceba que se alterarmos algum dos comandos abaixo a exceção não será capturada. O bloco try catch não consegue capturar o erro quando a promise da função execute é rejeitada. Isso tem a ver com o fato de que o bloco try catch foi projetado para lidar com exceções (que são síncronas), e não com rejeições de promessa (que são assíncronas). Portanto, se estivermos utilizando promise methods (then/catch/finally), a rejeição da promessa é tratada chamando o método manipulador de rejeição (.catch), e não pelo mecanismo de exceção (bloco try catch).

// ** IMPORTANTE **

// Rejeições de promessa são consideradas exceções quando você esta aguardando - await(ing) - por elas. Portando, se usarmos a palavra chave await na frente da chamada da função execute, caso a promessa seja rejeitada, ela será considerada uma exceção e será tratada pelo bloco try catch. Isso pode ser testado abaixo adicionando a palavra chave await.

// https://stackoverflow.com/questions/66119982/why-doesnt-the-try-catch-block-catch-the-promise-exception

try {
  let database = new Database();

  database.execute(
    "creAAAAAAate table author (id number, name string, age number, city string, state string, country string)"
  );

  Promise.all([
    database.execute(
      "insert into author (id, name, age) values (1, Douglas Crockford, 62)"
    ),
    database.execute(
      "insert into author (id, name, age) values (2, Linus Torvalds, 47)"
    ),
    database.execute(
      "insert into author (id, name, age) values (3, Martin Fowler, 54)"
    ),
  ]);

  database.execute("select name, age from author").then(result => {
    console.log(JSON.stringify(result, undefined, 2));
  });
} catch (e) {
  console.log(e.message);
}
