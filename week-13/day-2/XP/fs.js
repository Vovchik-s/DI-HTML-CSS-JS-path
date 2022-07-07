let fs = require('fs');

// Exercise 1 : Reading From A File In Node.JS
fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error, try again ... :',err);
    } else {
        console.log(data);
    }
});

// Exercise 2 : Writing Files With Node JS
fs.writeFile('NewText.txt', 'Hello World', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File created');
    }
});

// Use the Node js File System to append some other text to the text file
fs.appendFile('NewText.txt', '  Say hello to my little friend', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File created');
    }
});

// Use the Node js File System to delete the file.
fs.unlink('NewText.txt', (err) => {
    console.log('File deleted');
});