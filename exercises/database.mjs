import { Parser } from "./parser.mjs";
import { DatabaseError } from "./databaseError.mjs";

export class Database {
  constructor() {
    this.tables = {};
    this.parser = new Parser();
  }

  createTable(parsedStatement) {
    const tableName = parsedStatement[1];
    const columns = parsedStatement[2].split(", ");

    this.tables[tableName] = {
      columns: {},
      data: [],
    };

    for (let col of columns) {
      const [key, value] = col.split(" ");
      this.tables[tableName].columns[key] = value;
    }
  }

  insert(parsedStatement) {
    let [, tableName, columns, values] = parsedStatement;
    columns = columns.split(", ");
    values = values.split(", ");

    const row = {};

    for (let i = 0; i < columns.length; i++) {
      row[columns[i]] = values[i];
    }

    this.tables[tableName].data.push(row);
  }

  select(parsedStatement) {
    let [, columns, tableName, columnWhere, valueWhere] = parsedStatement;

    columns = columns.split(", ");

    let rows = this.tables[tableName].data;

    if (columnWhere && valueWhere) {
      rows = rows.filter(row => {
        return row[columnWhere] === valueWhere;
      });

      return rows;
    }

    // Nos exercicios anteriores, acabei esquecendo de declarar a variável do loop for of com var, let ou const: for (col of columns), e até refatorar os exercícios para classes esses códigos vinham funcionando normalmente. O que acontece é que o javascript permite a declaração de variáveis sem a palavra chave let, var e const, nesse caso, o javascript assume que ela é global. Isso pode ser problemático em muitos casos, mas nesse caso específico, funcionava porque o código não estava em strict mode. Entretanto, agora que estamos utilizando classes e, levando em consideração que o corpo de uma classe (a parte que está entre chaves {}) é executado em strict mode, esse tipo de construção não funciona, devendo ser declarada o tipo de variável no loop for of.

    rows = rows.map(row => {
      let selectedRow = {};
      for (let col of columns) {
        selectedRow[col] = row[col];
      }
      return selectedRow;
    });

    return rows;
  }

  delete(parsedStatement) {
    let [, tableName, columnWhere, valueWhere] = parsedStatement;

    if (!columnWhere && !valueWhere) {
      return (this.tables[tableName].data = []);
    }

    let data = this.tables[tableName].data;
    data = data.filter(row => row[columnWhere] !== valueWhere);
    this.tables[tableName].data = data;
  }

  execute(statement) {
    const result = this.parser.parse(statement);

    if (result) {
      return this[result.command](result.parsedStatement);
    }

    const message = `Syntax error: '${statement}'`;
    throw new DatabaseError(statement, message);
  }
}
