const fs = require('fs');
const readline = require('readline');
const csv = require("csvtojson");
const xml2json = require('xml2json');
const args = process.argv.slice(2);

// Default Values
let lines = 20;

const arguments = {
    'input': ['-i', '--input'],
    'lines': ['-l', '--lines']
}

args.forEach((arg) => {
    // Input filename
    if (arg.includes(arguments['input'][0]) || arg.includes(arguments['input'][1])) {
        arg = arg.split('=');
        inputFile = arg[1];
    }

    // Number of lines to return
    if (arg.includes(arguments['lines'][0]) || arg.includes(arguments['lines'][1])) {
        arg = arg.split('=');
        lines = arg[1];
    }
});


// ------------------------------------------------------------------
// Initialize JSON object
// ------------------------------------------------------------------
let json = {};
let jsonKey = 'products_data';
json[jsonKey] = [];


// ------------------------------------------------------------------
// Function to convert CSV file to JSON
// ------------------------------------------------------------------
const convertCSV = (file) => {
    csv()
    .fromFile(file)
    .then((jsonObj) => {
        jsonObj.forEach((product, index) => {
            if (index <= lines) {
                const keys = Object.keys(product);
                let newKeys = [];
                keys.forEach((key) => {
                    key = key.split('_');
                    key.forEach((item, index) => {
                        if (index > 0) {
                            item = item.charAt(0).toUpperCase() + item.slice(1);
                        }
                        newKeys += item;
                    });
                });
                json[jsonKey].push(product);
            }
        });

        console.log(`Converted ${file} to ${fileName}.json`);
        fs.writeFileSync(fileName + '.json', JSON.stringify(json, null, 4));
    });
};

// ------------------------------------------------------------------
// Function to convert TSV file to JSON
// ------------------------------------------------------------------
const convertTSV = (file) => {
    let lineCounter = 0;
    const lineReader = readline.createInterface({
        input: fs.createReadStream(file)
    });

    let isHeader = false;
    let columnNames = [];

    const parseLine = (line) => {
        return line.trim().split('\t');
    }

    const createRowObject = (values) => {
        let rowObject = {};
        newColumnNames.forEach((value, index) => {
            rowObject[value] = values[index].replace(/\"/g, '');
        });
        return rowObject;
    }

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
                json[jsonKey].push(createRowObject(parseLine(line)));
            }
        }
    });

    lineReader.on('close', () => {
        console.log(`Converted ${file} to ${fileName}.json`);
        fs.writeFileSync(fileName + '.json', JSON.stringify(json, null, 4));
    });
};


// ------------------------------------------------------------------
// Function to convert TXT file to JSON
// ------------------------------------------------------------------
const convertTXT = (file) => {
    let lineCounter = 0;
    const lineReader = readline.createInterface({
        input: fs.createReadStream(file)
    });

    let isHeader = false;
    let columnNames = [];

    const parseLine = (line) => {
        return line.trim().split('\t')
    }

    const createRowObject = (values) => {
        let rowObject = {};
        newColumnNames.forEach((value, index) => {
            rowObject[value] = values[index];
        });
        return rowObject;
    }

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
                json[jsonKey].push(createRowObject(parseLine(line)));
            }
        }
    });

    lineReader.on('close', () => {
        console.log(`Converted ${file} to ${fileName}.json`);
        fs.writeFileSync(fileName + '.json', JSON.stringify(json, null, 4));
    });
};


// ------------------------------------------------------------------
// Function to convert XML file to JSON
// ------------------------------------------------------------------
const convertXML = (file) => {
    const xml = fs.readFileSync(file, 'utf8');

    const options = {
        object: true,
        reversible: false,
        coerce: true,
        sanitize: true,
        trim: true,
        arrayNotation: false,
        alternateTextNode: false
    };

    let converted = xml2json.toJson(xml, options);
    converted = converted.catalog.product;
    converted.forEach((product, index) => {
        if (index <= lines) {
            json[jsonKey].push(product);
        }
    });

    console.log(`Converted ${file} to ${fileName}.json`);
    fs.writeFileSync(fileName + '.json', JSON.stringify(json, null, 4));
};




// ==================================================================
// Determine the file type and convert
// ==================================================================
const file = inputFile;
const fileName = inputFile.split('.')[0];
const fileType = inputFile.split('.')[1].toLowerCase();


switch(fileType) {
    case 'csv':
        convertCSV(file);
        break;
    case 'tsv':
        convertTSV(file);
        break;
    case 'txt':
        convertTXT(file);
        break;
    case 'xml':
        convertXML(file);
        break;
    default:
        break;
}
