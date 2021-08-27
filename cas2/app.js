// http-module.js
// const http = require('http');

// // console.log(http);
// // console.log(http.STATUS_CODES);

// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         res.write('Welcome, and Hello');
//         res.end();
//     }

//     if(req.url === '/page2'){
//         res.write(JSON.stringify('This is the second page'));
//         res.end();
//     }
// });

// server.listen(3000);

// console.log('Listening on port 3000...');


// fs-module.js
const fs = require('fs');
console.log(fs.access.call);
console.log(fs.chmod.name);
console.log(fs.readvSync.length);
console.log(fs.appendFile.name);


// util-module.js
const util = require('util');
console.log(util.isDeepStrictEqual.length);
console.log(util.inspect.colors);
console.log(util.types.isArgumentsObject);

// querystring-module.js
const querystring = require('querystring');
console.log(querystring.stringify.name);
console.log(querystring.decode.length);
console.log(querystring.parse.length);