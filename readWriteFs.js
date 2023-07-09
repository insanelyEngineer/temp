// const { writeFileSync, readFileSync, read } = require('fs');

// const read1 = readFileSync('./hero/yo.txt', 'utf-8')

// writeFileSync('./hero/tester/music.txt', ` 2 . hello I will edit this out again - ${read1}`, { flag: 'a' });

const { readFile, writeFile } = require('fs');

readFile('./hero/tester/fire.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const text1 = result;

    writeFile('./hero/tester/music.txt', `\nOK ASYNC edit is here --> ${text1} `, { flag: 'a' }, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
    })


})