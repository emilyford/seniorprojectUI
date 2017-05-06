#!/usr/bin/env node
var count = 0;
var count1 = 0;
var directories = []
var directoriesparsed = []
var fs = require("fs");
var path = require("path");
var photoarray = [];

var x = "../public/images/Accepted";
fs.readdir(x, function (err, files) { 
	if (err) {
        throw err;
    }
    files.map(function (file) {
        return path.join(x, file);
    }).filter(function (file) {
        return fs.statSync(file).isDirectory();
    }).forEach(function (file) {
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
    });  

	var z = 1;
	var zz = directoriesparsed.length;
	//need following if statements because loop isn't possible w/ fs.readdir
    while(1){
		if (z==1){
			var Name = [];
			var y = "../public/images/Accepted/" + directoriesparsed[z-1];
			fs.readdir(y, function (err, files) {
					if (err) {
							throw err;
					}
					files.map(function (file) {
							return path.join(y, file);
					}).filter(function (file) {
							return fs.statSync(file).isFile();
					}).forEach(function (file) {
							Name.push(file);
					});
			photoarray.push(Name);
			filewriter(photoarray,directoriesparsed);
			});
			if (z==zz){
				break;
			}
			z++;
		}
		if(z==2){
			var Name2 = [];
			var d = "../public/images/Accepted/" + directoriesparsed[z-1];
			fs.readdir(d, function (err, files) {
					if (err) {
							throw err;
					}
					files.map(function (file) {
							return path.join(d, file);
					}).filter(function (file) {
							return fs.statSync(file).isFile();
					}).forEach(function (file) {
							Name2.push(file);
							//textfilewriter(file);
					});
			photoarray.push(Name2);
			filewriter(photoarray, directoriesparsed);
			});
			if (z==zz){
				break;
			}
			z++;
		}
		if(z==3){
			var Name3 = [];
			var e = "../public/images/Accepted/" + directoriesparsed[z-1];
			fs.readdir(e, function (err, files) {
					if (err) {
							throw err;
					}
					files.map(function (file) {
							return path.join(e, file);
					}).filter(function (file) {
							return fs.statSync(file).isFile();
					}).forEach(function (file) {
							Name3.push(file);
							//textfilewriter(file);
					});
			photoarray.push(Name3);
			filewriter(photoarray, directoriesparsed);
			});
			if (z==zz){
				break;
			}
		z++;
		}
		if(z==4){
			var Name4 = [];
			var f = "../public/images/Accepted/" + directoriesparsed[z-1];
			fs.readdir(f, function (err, files) {
					if (err) {
							throw err;
					}
					files.map(function (file) {
							return path.join(f, file);
					}).filter(function (file) {
							return fs.statSync(file).isFile();
					}).forEach(function (file) {
							Name4.push(file);
							//textfilewriter(file);
					});
			photoarray.push(Name4);
			filewriter(photoarray, directoriesparsed);
			});
			if (z==zz){
				break;
			}
		z++;
		}
		if(z==5){
			var Name5 = [];
			var g = "../public/images/Accepted/" + directoriesparsed[z-1];
			fs.readdir(g, function (err, files) {
					if (err) {
							throw err;
					}
					files.map(function (file) {
							return path.join(g, file);
					}).filter(function (file) {
							return fs.statSync(file).isFile();
					}).forEach(function (file) {
							Name5.push(file);
							textfilewriter(file);
					});;
			photoarray.push(Name5);
			filewriter(photoarray, directoriesparsed);
			});
			if (z==zz){
				break;
			}
		z++;
		}
		if(z==6){
			var Name6 = [];
			var h = "../public/images/Accepted/" + directoriesparsed[z-1];
			fs.readdir(h, function (err, files) {
					if (err) {
							throw err;
					}
					files.map(function (file) {
							return path.join(h, file);
					}).filter(function (file) {
							return fs.statSync(file).isFile();
					}).forEach(function (file) {
							Name6.push(file);
							textfilewriter(file);
					});
			photoarray.push(Name6);
			filewriter(photoarray, directoriesparsed);
			});
			if (z==zz){
				break;
			}
		z++;
		}
		if(z==7){
			var Name7 = [];
			var y = "../public/images/Accepted/" + directoriesparsed[z-1];
			fs.readdir(y, function (err, files) {
					if (err) {
							throw err;
					}
					files.map(function (file) {
							return path.join(i, file);
					}).filter(function (file) {
							return fs.statSync(file).isFile();
					}).forEach(function (file) {
							Name7.push(file);
							textfilewriter(file);
					});
			photoarray.push(Name7);
			filewriter(photoarray, directoriesparsed);
			});
			if (z==zz){
				break;
			}
		z++;
		}
		if(z==8){
			var Name8 = [];
			var i = "../public/images/Accepted/" + directoriesparsed[z-1];
			fs.readdir(i, function (err, files) {
					if (err) {
							throw err;
					}
					files.map(function (file) {
							return path.join(i, file);
					}).filter(function (file) {
							return fs.statSync(file).isFile();
					}).forEach(function (file) {
							Name8.push(file);
							textfilewriter(file);
					});
			photoarray.push(Name8);
			filewriter(photoarray, directoriesparsed);
			});
			if (z==zz){
				break;
			}
		z++;
		}
		if(z==9){
			var Name9 = [];
			var j = "../public/images/Accepted/" + directoriesparsed[z-1];
			fs.readdir(j, function (err, files) {
					if (err) {
							throw err;
					}
					files.map(function (file) {
							return path.join(j, file);
					}).filter(function (file) {
							return fs.statSync(file).isFile();
					}).forEach(function (file) {
							Name9.push(file);
							textfilewriter(file);
					});
			photoarray.push(Name9);
			filewriter(photoarray, directoriesparsed);
			});
			if (z==zz){
				break;
			}
		z++;
		}
		if(z==10){
			var Name10 = [];
			var k = "../public/images/Accepted/" + directoriesparsed[z-1];
			fs.readdir(k, function (err, files) {
					if (err) {
							throw err;
					}
					files.map(function (file) {
							return path.join(k, file);
					}).filter(function (file) {
							return fs.statSync(file).isFile();
					}).forEach(function (file) {
							Name10.push(file);
							textfilewriter(file);
					});
			photoarray.push(Name10);
			filewriter(photoarray, directoriesparsed);
			});
			if (z==zz){
				break;
			}
		z++;
		}
	}
});		
		
//put in data parser here to fix the formatting of the arrays!


//have function that goes into each if statement and throws data into a text file 
/*
function textfilewriter(photoarray){
    console.log("Going to write into existing file!");
    fs.appendFile('./data.txt',photoarray + '\n',  //input data here
    function(err){
        if(err){
                return console.error(err);
        }
        fs.readFile('./data.txt', function (err, data) { 
                if (err){
                        return console.error(err);
                 }
                console.log("Asynchronous read: " + data.toString());

		});
	});	
}
//textfilereader();
//filewriter(photoarray, directoriesparsed);


function textfilereader(){
	fs.readFile('./data.txt', function(err){
        if(err){
                return console.error(err);
        }
        fs.readFile('./data.txt', function (err, data) { 
                if (err){
                        return console.error(err);
                 }
                console.log("Asynchronous read: " + data.toString());
				photoarray = data.toString();
		});
	});	
}
*/
var userdata = '{';	
function filewriter(photoarray, directoriesparsed){
    console.log("Going to write into existing file!");
	console.log(photoarray);
	//console.log(photoarray.length);
	//console.log(directoriesparsed.length);
	userdata = dataparser(userdata, photoarray, directoriesparsed);
	fs.writeFile('./stuff.json',
    '{' + '\r\n' +  '"users":[\r\n' + userdata + '\r\n' + ']}'
    ,  //input data here
    function(err){ 
        if(err){
                return console.error(err);
        }
        fs.readFile('./stuff.json', function (err, data) { 
                if (err){
                        return console.error(err);
                 }
                console.log("Asynchronous read: " + data.toString());

		});
		return 0; 
	});
	
	}

function dataparser(userdata, photoarray, directoriesparsed){
	//console.log(directoriesparsed);
	var pl = photoarray.length;
	var dl = directoriesparsed.length;
	console.log(pl);
	console.log(dl);
	var q,r;
	if (dl == pl){	
		console.log("Inside the if statement!!");
		userdata = '{';
		for(q=0; q<dl; q++){
			var ppl = photoarray[q].length;
			//console.log(photoarray);
			//console.log(photoarray[q][1]);
			//console.log("ppl is:");
			//console.log(ppl);
			//console.log("for loop!");
			if(q!=0){
				userdata = userdata + '\r\n{';
			}
			userdata = userdata + '"name": ';
			console.log(userdata);
			userdata = userdata + '"' + directoriesparsed[q] + '"' + ',\r\n';
			console.log(userdata);
			//userdata = userdata +
			for(r=0; r<ppl; r++){
				userdata = userdata + '"' + 'photo' + (r+1) + '" :'; 
				userdata = userdata + ' "' + photoarray[q][r] + '"';
				if(r!=(ppl-1)){
					userdata = userdata + ',';
				}
				userdata = userdata + '\r\n';
				console.log(userdata);
			}
			if(q==(dl-1)){
				userdata = userdata + '}';
			}
			if(q!=(dl-1)){
				userdata = userdata + '},';
			}
		}
		
		}
	return(userdata);
}

