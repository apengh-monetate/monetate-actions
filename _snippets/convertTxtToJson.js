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



console.log('input', file_name);
console.log('lines', lines);
console.log('text', search);

const readline = require('readline');
const fs = require('fs');

let lineCounter = 0;
const lineReader = readline.createInterface({
    input: fs.createReadStream(file_name)
});

let isHeader = false;
let columnNames = [];

const parseLine = (line) => {
    return line.trim().split('\t')
}

function createRowObject(values) {
    let rowObject = {};

    newColumnNames.forEach((value,index) => {
        rowObject[value] = values[index];
    });

    return rowObject;
}

let json = {};
json['products_data'] = [];

lineReader.on('line', (line) => {
    lineCounter++;
    if (lines && lineCounter <= lines) {
        if(!isHeader) {
            columnNames = parseLine(line);
            newColumnNames = [];
            columnNames.forEach((columnName) => {
                columnName = columnName.split('_');
                newColumnName = '';
                columnName.forEach((name, index) => {
                    if (index > 0) {
                        name = name.charAt(0).toUpperCase() + name.slice(1);
                    }
                    newColumnName += name;
                });
                newColumnNames.push(newColumnName);
            });
            isHeader = true;
        } else {
            json['products_data'].push(createRowObject(parseLine(line)));
        }
    }
});

// Filter the JSON
// json['products_data'].filter()


lineReader.on('close', () => {
    file_name = file_name.split('.');
    console.log(`Converted .txt file, output ${lines} products to ${file_name[0]}.json`);
    fs.writeFileSync(file_name[0] + '.json', JSON.stringify(json, null, 2));
});
