var fs = require('fs');
var path = require('path');


/*
fs.exists('./practice.json', function(exists){
    if(exists) {
        console.log(('File exists. Deleting now ...'));
        fs.unlink('./practice.json');
    } else {
        console.log(('File not found, so not deleting.'));
  }
});

//^add back later
*/
console.log("Going to write into existing file!");
fs.writeFile('./intruders.json',
'{' + '\r\n' +  '"intruders":['	+ '\r\n' +


+ '\r\n' + ']' + '}'
,  //input data here
function(err){
	if(err){
		return console.error(err);
	}
	console.log("Data written successfully!");
	console.log("Let's read newly written data");
	fs.readFile('./intruders.json', function (err, data) {
		if (err){ 
			return console.error(err);
       		 }
        	console.log("Asynchronous read: " + data.toString());

 });
});
