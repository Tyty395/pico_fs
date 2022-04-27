const fs = require('fs');

function write(file, data) {
  //encode to Uint8Array
  var chars = [];
  for (var i = 0; i < data.length; ++i) {
    chars.push(data.charCodeAt(i));
  }
  console.log('Writing the following data to ' + file + ':\n' + data);
  fs.writeFile(file, new Uint8Array(chars));
}

function read(file) {
  var data = fs.readFile(file);
  var chars = [];
  for (var i = 0; i < data.length; i++) {
    chars.push(String.fromCharCode(data[i]));
  }
  var text = chars.join('');
  console.log('Read the following data from ' + file + ':\n' + text);
  return text;
}

var filedata = `This is a test.
If you're reading this, it seems to be working.
Which is a good sign.`;
write('test.txt', filedata);
read('test.txt');
