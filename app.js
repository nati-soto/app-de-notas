const path = require('path');
const fs = require('fs');

 console.log(path.resolve);
 path.resolve('./data/data.json');
 console.log( path.resolve(__dirname, './data/data.json') );
 
 console.log(path.join('./data/data.json'));

 console.log(fs.readFileSync(rutaAlJson, {encoding: 'utf-8'}));

