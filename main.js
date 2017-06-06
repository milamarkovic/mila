console.log('mila')

var taskArray = process.argv.slice(2);
var task = taskArray.join(' ') + '\n';

var fs = require('fs');
fs.appendFile("data.txt", task, function(err) {
  if (err) throw err;
  console.log("The file was saved!");
  fs.readFile("data.txt", 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data)
  });
});
