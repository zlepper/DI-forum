const util = require('util');
const fs = require('fs');
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

//Overwrites the current persistence.json file with whatever data is if it is valid json
function overwrite(data, path = './server/persistence.json') {
    return writeFile(path, JSON.stringify(data));
}

//Loads a jsonfile asynchronusly, can optionally specify a new path
function load(path = './server/persistence.json') {
    return readFile(path, 'utf8')
}
