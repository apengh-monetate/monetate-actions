// const convert = require('xml-js');
const convert = require('xml2json');
const fs = require('fs');

const args = process.argv.slice(2);

// Default Values
let lines = 20;
let search = '';

const flags = {
    'input': ['-i', '--input'],
    'lines': ['-l', '--lines'],
    'text': ['-t', '--text']
}

args.forEach((arg) => {
    console.log(arg);

    // Input filename
    if (arg.includes(flags['input'][0]) || arg.includes(flags['input'][1])) {
        arg = arg.split('=');
        file_name = arg[1];
    }

    // Number of lines to return
    if (arg.includes(flags['lines'][0]) || arg.includes(flags['lines'][1])) {
        arg = arg.split('=');
        lines = arg[1];
    }

    // Text to search for
    if (arg.includes(flags['text'][0]) || arg.includes(flags['text'][1])) {
        arg = arg.split('=');
        search = arg[1];
    }

});

let json = {};
json['products_data'] = [];

const xml = fs.readFileSync(file_name, 'utf8');
// const json = convert.xml2json(xml, {compact: true, spaces: 4});
const converted = convert.toJson(xml);
json['products_data'].push(converted);
console.log('JSON output', json);


file_name = file_name.split('.');
console.log(`Converted .xml file ${file_name[0]}.json`);
fs.writeFileSync(file_name[0] + '.json', json);
