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
  execute(statement) {
    if (statement.startsWith("create table")) {
      return this.createTable(statement);
    }

    const message = `Syntax error: '${statement}'`;
    throw new DatabaseError(statement, message);
  },
};

try {
  database.execute(
    "create table author (id number, name string, age number, city string, state string, country string)"
  );
  database.execute("select id, name from author");
  console.log(JSON.stringify(database, undefined, 2));
} catch (e) {
  console.log(e.message);
}
