#!/usr/bin/env node
var count = 0;
var count1 = 0;
var directories = []
var fs = require("fs");
var path = require("path");

var p = "../public/images"
fs.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }
    files.map(function (file) {
        return path.join(p, file);
    }).filter(function (file) {
        return fs.statSync(file).isDirectory();
    }).forEach(function (file) {
        console.log(file);
	directories.push(file);
	count++;
	console.log(count);
    });
});

var d = "../public/images/Duncan"
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
        directories.push(file);
        count1++;
        console.log(count1);
    });
});
console.log(directories);

