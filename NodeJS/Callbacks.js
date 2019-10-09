// Callbacks are functions that are executed asynchronously, or at a later time. 
// Instead of the code reading top to bottom procedurally, 
// asynchronous programs may execute different functions at different times 
// based on the order and speed of earlier functions.

// JavaScript treats functions like any other object
// we can pass a function as an argument in another function 
// and alter execute that passed-in function or even return it to be executed later.

//const fs = require('fs');
//let file = `${__dirname}/temp/sample.txt`;
// fs.readFile(file, 'utf8', (err, data) =>        // 3
// {                                               // 4
//   if (err) throw err;                           // 5
//   console.log(data);                            // 6
// });                                             // 7


// Line 3 we use a variable part of the globals, _ _dirname, which basically gives us the absolute 
// path of the directory (folder) in which our current file (read-file.js) is, 
// from which we can access the temp/sample.txt file.


// Most callback functions will take in two parameters,
// the first being the error object and the second, the results. 
// For the preceding case, if file reading is successful, the error object, err, 
// will be null and the contents of the file will be returned in the data object.
// Example

const fs = require('fs');

function test2()
{
  let file = `${__dirname}/temp/sample.txt`;
  const callback = (err, data) => 
  {
    if (err) throw err;
    console.log(data);
  };
  fs.readFile(file, 'utf8', callback);
  
  // Now lets add a line, notice that the line below is the first in the output
  // Node.js still runs on a single thread, line 10 executes in a non-blocking manner and moves on to the next line,
  // which is console.log('Print out last!'). Since the previous line takes a long time, the next one will print first. 
  // Once the readFile process is done, it then prints out the content of file through the callback.
  console.log('Print out last!');
  
}

test2();