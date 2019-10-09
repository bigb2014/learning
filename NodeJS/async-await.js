// providing an even better way of writing asynchronous code, 
// making it look and behave a little more like synchronous code.

// Going back to our file reading example, say you wanted to get the contents
//  of two files and concatenate them in order. 
//  This is how you can achieve that with async/await:

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function readFiles() 
{
  const content1 = await readFile(`${__dirname}/temp/sample1.txt`);
  const content2 = await readFile(`${__dirname}/temp/sample2.txt`);
  return content1 + '\n - and - \n\n' + content2;
}
readFiles().then(result => console.log(result));