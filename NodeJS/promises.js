// Promises are an alternative to callbacks for delivering the results of an asynchronous computation.

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

function test1() {
// async function //////////////////////////////////////////////////////////
    const readFile = (file) => 
    {
    return new Promise((resolve, reject) => 
    {
        fs.readFile(file, 'utf8', (err, data) => 
        {
        if (err) reject(err);
        else resolve(data);
        });
    });
    }
    // call the async function
    readFile(`${__dirname}/temp/sample.txt`)
    .then(data => console.log(data))
    .catch(error => console.log('err: ', error.message));

//////////////////////////////////////////////////////////////////////

}

// This code can further be simplified by using the util.promisify function, which takes a function following the common Node.js 
// callback style, that is, taking an (err, value) => … callback as the last argument and returning a version that returns promises:

// function test2 is just a wrapper i put here so i can seperate the examples
function test2(){

    readFile(`${__dirname}/temp/sample.txt`, 'utf8')
    .then(data => console.log(data))
    .catch(error => console.log('err: ', error));
}

// Promises provide a standard way of handling asynchronous code, making it a little more readable.

// What if you had 10 files, and you wanted to read all of them? Promise.all comes to the rescue. 
// Promise.all is a handy function that enables you to run asynchronous functions in parallel. 
// Its input is an array of promises; its output is a single promise that is fulfilled with an array of the results:

function test3 () {
    const files = [
        'temp/sample.txt',
        'temp/sample1.txt',
        'temp/sample2.txt',
      ];
      // map the files to the readFile function, creating an
      // array of promises
      const promises = files.map(file => readFile(`${__dirname}/${file}`, 'utf8'));
      Promise.all(promises)
        .then(data => 
        {
          data.forEach(text => console.log(text));
        })
        .catch(error => console.log('err: ', error));
}

test3();