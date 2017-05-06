#!/usr/bin/env node
var count = 0;
var count1 = 0;
var directories = []
var directoriesparsed = []
var fs = require("fs");
var path = require("path");
var photoarray = [];

var p = "../public/images/Accepted"
fs.readdir(p, function (err, files) { 
    if (err) {
        throw err;
    }
    files.map(function (file) {
        return path.join(p, file);
    }).filter(function (file) {
        return fs.statSync(file).isDirectory();
    }).forEach(function (file) {
 	//console.log(file);
	for(var i=0; i<(file.length-26); i++){
		directories.push(file[i+26]);
	}
	directories.push('\r\n');
	var y = 0;
	var count = 0;
	for(var x = 0; x<directories.length; x++){
		if(directories[x]=='\r\n'){
			directoriesparsed[count] = y;
			y = 0;
			count++;
		}else{
			if(x==0 || (directories[x-1] == '\r\n')){
				y = directories[x];
			}
			else{
				y = y + directories[x];
			}
		}
	}
	count++;
	//console.log(count);
    });
    //console.log(directoriesparsed);
   


    while(1){
		//z = directoriesparsed.length;
		z = 1;	 
		if (z==1){
			var p = "../public/images/Accepted/" + directoriesparsed[z-1];
			console.log(p); 
			console.log("Inside first if statement");    
			var Name = [];
			console.log(z);	
			fs.readdir(p, function (err, files) {
				if (err) {
					throw err;
				}
				files.map(function (file) {
					return path.join(p, file);
				}).filter(function (file) {
					return fs.statSync(file).isDirectory();
				}).forEach(function (file) {
				//console.log(file);
				
			});
			z++;
			});
		}
		if(z==2){
			var d = "../public/images/Accepted/" + directoriesparsed[z-1];
			console.log(d);
			fs.readdir(d, function (err, files) {
					if (err) {
							throw err;
					}
					files.map(function (file) {
							return path.join(d, file);
					}).filter(function (file) {
							return fs.statSync(file).isFile();
					}).forEach(function (file) {
							console.log(file);
							Name.push(file);
							console.log(Name);
				console.log("Made it to two :)");
					});
			photoarray.push(Name);
			console.log("The photo array is:");
			console.log(photoarray);
			});
		z++;
		}
		if(z=directoriesparsed.length){
			break;
		}
	}
//}
//put in data parser here to fix the formatting of the arrays!

   
    console.log("Going to write into existing file!");
    fs.writeFile('./intruders.json',
    '{' + '\r\n' +  '"users":[' + '\r\n' +
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

});
