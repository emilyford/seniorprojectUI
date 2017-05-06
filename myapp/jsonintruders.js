#!/usr/bin/env node
var fs = require("fs");
var path = require("path");
var util = require('util');
var photos = [];
var dates = [];

var y = "public/images/Intruders";
fs.readdir(y, function (err, files) {
	if (err) {
		throw err;
	}
	files.map(function (file) {
		return path.join(y, file);
	}).filter(function (file) {
		return fs.statSync(file).isFile();
	}).forEach(function (file) {
		photos.push(file);
		var stats = fs.statSync(file);
		dates.push(stats.birthtime);
	});
	console.log(photos);
	console.log(dates);
	filewriter(photos, dates);

});  

var userdata = '{';	
function filewriter(photoarray, directoriesparsed){
    console.log("Going to write into existing file!");
	console.log(photoarray);
	//console.log(photoarray.length);
	//console.log(directoriesparsed.length);
	userdata = dataparser(userdata, photoarray, directoriesparsed);
	fs.writeFile('./public/intruderdata.json',
    '{' + '\r\n' +  '"intruders":[\r\n' + userdata + '\r\n' + ']}'
    ,  //input data here
    function(err){ 
        if(err){
                return console.error(err);
        }
        fs.readFile('./public/intruderdata.json', function (err, data) { 
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
			//var ppl = photoarray[q].length;
			if(q!=0){
				userdata = userdata + '\r\n{';
			}
			userdata = userdata + '"photo": ';
			console.log(userdata);
			userdata = userdata + '"' + photoarray[q] + '"' + ',\r\n';
			console.log(userdata);
			userdata = userdata + '"date": ';
			userdata = userdata + ' "' + directoriesparsed[q] + '"';
			//if(r!=(ppl-1)){
			//	userdata = userdata + ',';
			//}
			userdata = userdata + '\r\n';
			console.log(userdata);
			
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
