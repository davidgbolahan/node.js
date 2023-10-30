const fs = require('fs')

// synchronous  operation
//const data = fs.readFileSync('text.txt');

//console.log("synchronous read: " + data.toString());
fs.readFile("text.txt", (err, data) => {
    if (err) return console.error(err);

    console.log("Asynchronous read: " + data.toString());
})

console.log("Program Ended");
