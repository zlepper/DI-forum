const util = require('util');
const fs = require('fs');
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

exports.overwrite = overwrite;
exports.load = load;
exports.loadJSON = loadJSON;

//Overwrites the current persistence.json file with whatever data is if it is valid json
function overwrite(data, path = './server/persistence.json') {
    return writeFile(path, JSON.stringify(data));
}

//Loads a jsonfile asynchronusly, can optionally specify a new path
function load(path = './server/persistence.json') {
    return readFile(path, 'utf8')
}

async function loadJSON(path = './server/persistence.json', defaultValue = []) {
    try {
        let text = await load(path);
        return JSON.parse(text);
    } catch(e) {
        console.log(e);
        return defaultValue;
    }
}
