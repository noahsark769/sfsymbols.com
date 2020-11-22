const fs = require('fs');
const path = require('path');

// https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs
const isDirectorySync = (source) => fs.lstatSync(source).isDirectory()
const getDirectoriesSync = (source) => {
  return fs.readdirSync(source).map(name => path.join(source, name)).filter(isDirectorySync)
}

const readJsonAsync = (filepath, callback) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', function(err, data) {
            if (err) {
                reject(err);
            } else {
                const result = JSON.parse(data);
                if (result) {
                    resolve(result);
                } else {
                    throw new Error("Json parse error");
                }
            }
        });
    });
}

const combineSymbolDataWithExampleData = (data, restrictedData) => {
    let restrictedMap = new Map();
    for (let restrictedDatum of restrictedData) {
        restrictedMap.set(restrictedDatum.symbolName, restrictedDatum.feature);
    }

    return Promise.all(data.map((symbolName) => {
        const examplesDirectoryPath = path.resolve(`src/data/export/${symbolName}/`);
        if (!fs.existsSync(examplesDirectoryPath)) {
            return Promise.resolve({
                name: symbolName,
                lightBasePath: null,
                darkBasePath: null,
                restriction: restrictedMap.get(symbolName)
            });
        }

        return {
            name: symbolName,
            lightBasePath: `export/${symbolName}/light.png`,
            darkBasePath: `export/${symbolName}/dark.png`,
            restriction: restrictedMap.get(symbolName)
        };
    }));
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const templateComponent = path.resolve(`src/templates/Main.jsx`);

        readJsonAsync(path.resolve(`src/data/symbols.json`)).then((data) => {
            readJsonAsync(path.resolve(`src/data/restrictedSymbols.json`)).then((restrictedData) => {
                combineSymbolDataWithExampleData(data, restrictedData).then((symbols) => {
                    createPage({
                        path: '/',
                        component: templateComponent,
                        context: {
                            symbols: symbols
                        }
                    });
                    resolve();
                });
            });
        });
    })
}
