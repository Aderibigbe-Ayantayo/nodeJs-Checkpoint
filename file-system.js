const fs = require('fs');

fs.writeFile ('welcome.txt', 'HELLO NODE', (err) =>{
    if(err) throw err;
    // console.log('File has been created');
})

// that read from welcome.txt
fs.readFile ('welcome.txt', 'utf8', (err, data) =>{
    if (err) throw err;
    console.log(data)
})