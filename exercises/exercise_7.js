const DatabaseError = function (statement, message) {
  this.statement = statement;
  this.message = message;
};

const database = {
  tables: {},
  createTable(statement) {
    const regex = /create table ([a-z]+) \((.+)\)/;
    const parsedStatement = statement.match(regex);
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
  },
  insert(statement) {
    const regex = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;
    const parsedStatement = statement.match(regex);
    let [, tableName, columns, values] = parsedStatement;
    columns = columns.split(", ");
    values = values.split(", ");

    const row = {};

    for (let i = 0; i < columns.length; i++) {
      row[columns[i]] = values[i];
    }

    this.tables[tableName].data.push(row);
  },
  select(statement) {
    const regex = /select (.+) from ([a-z]+)(?: where ([a-z]+) = (.+))?/;
    const parsedStatement = statement.match(regex);
    let [, columns, tableName, columnWhere, valueWhere] = parsedStatement;

    columns = columns.split(", ");

    let rows = this.tables[tableName].data;

    if (columnWhere && valueWhere) {
      rows = rows.filter(row => {
        return row[columnWhere] === valueWhere;
      });

      return rows;
    }

    rows = rows.map(row => {
      let selectedRow = {};
      for (let col of columns) {
        selectedRow[col] = row[col];
      }
      return selectedRow;
    });

    return rows;
  },
  delete(statement) {
    const regex = /delete from ([a-z]+)(?: where ([a-z]+) = (.+))?/;
    const parsedStatement = statement.match(regex);
    let [, tableName, columnWhere, valueWhere] = parsedStatement;

    if (!columnWhere && !valueWhere) {
      return (this.tables[tableName].data = []);
    }

    let data = this.tables[tableName].data;
    data = data.filter(row => row[columnWhere] !== valueWhere);
    this.tables[tableName].data = data;
  },
  execute(statement) {
    if (statement.startsWith("create table")) {
      return this.createTable(statement);
    }

    if (statement.startsWith("insert into")) {
      return this.insert(statement);
    }

    if (statement.startsWith("select")) {
      return this.select(statement);
    }

    if (statement.startsWith("delete")) {
      return this.delete(statement);
    }

    const message = `Syntax error: '${statement}'`;
    throw new DatabaseError(statement, message);
  },
};

try {
  database.execute(
    "create table author (id number, name string, age number, city string, state string, country string)"
  );
  database.execute(
    "insert into author (id, name, age) values (1, Douglas Crockford, 62)"
  );
  database.execute(
    "insert into author (id, name, age) values (2, Linus Torvalds, 47)"
  );
  database.execute(
    "insert into author (id, name, age) values (3, Martin Fowler, 54)"
  );
  database.execute("delete from author where id = 2");
  console.log(
    JSON.stringify(
      database.execute("select name, age from author"),
      undefined,
      2
    )
  );
  console.log(JSON.stringify(database, undefined, 2));
} catch (e) {
  console.log(e.message);
}
