var names = ["Duncan", "Scott", "Madeline", "Emily"];
var photos = ["duncan.jpg", "scott.jpg", "madeline.jpg", "emily.jpg"];
var intruderphotos = ["duncan1.jpg", "duncan2.jpg", "duncan3.jpg"]
var timeoutWarning = 840000; // Display warning in 14 Mins.
var timeoutNow = 900000; // Timeout in 15 mins.

/*function countDown(secs,elem){
		if (document.onmouseover){
			clearTimeout(timer);
		}
		secs--;
		var timer = setTimeout(countDown(secs)), 1000);
		console.log(secs);
}

window.setTimeout(function() { 
  window.location.href = "login.html";
  
 }, 1000)
*/

function showImages() {
	for (i=0;i<photos.length;i++) {
		document.write("<div id ='pics'><img src='" + photos[i] + "' width='400' height='400'/>" + "<br>" + "<div id='username'>" + names[i] + "</div></div>");
	
	}
};		
	
function showIntruders() {
	for (i=0;i<intruderphotos.length;i++) {
		document.write("<div id ='pics'><img src='" + intruderphotos[i] + "' width='400' height='400'/>" + "<br>" + "</div>");
	
	}
};	

function testing(){
	console.log("I am a test!");
};

function userInput(){
	var name = form1.elements["name"].value;
	var photo = form1.elements["photo"].value;
	
	names.push(name);
	photos.push(photo);

	console.log(names);
	console.log(photos);
	createCsv(names,photos);
	//grabUsers();
	showImage(names, photos);
	
	
};

function login(){
	var nameinput = form2.elements["name"];
	var passwordinput = form2.elements["password"];
	var adminuser = "admin";
	var adminpassword = "P@ssw0rd1234";
	if(adminuser == nameinput.value){
		if(adminpassword==passwordinput.value){
			window.location.href = "index.html";
			}
		else{
			alert("Incorrect Credentials!");
		}
		}
	else{
		alert("Incorrect credentials!");
	}
};
