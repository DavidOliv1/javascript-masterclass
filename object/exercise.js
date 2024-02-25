const statement = 'create table author (id number, name string, age number, city string, state string, country string)';
const regex = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statement.match(regex);
const tableName = parsedStatement[1];
const columns = parsedStatement[2].split(', ');

const database = {
    tables: {
        [tableName]: {
            columns: {},
            data: []
        }
    }
};

for (let col of columns) {
    const [key, value] = col.split(' ');
    database.tables[tableName].columns[key] = value;
}

console.log(JSON.stringify(database));
console.log(JSON.stringify(database, undefined, 2));