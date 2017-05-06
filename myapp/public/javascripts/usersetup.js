var names1 = [];
var names = [];
var pythonflag;
var idphotos = [];
var socket = io.connect();


var minutes = 5, the_interval = minutes * 60 * 1000;
setInterval(function() {
  console.log("I am doing my 5 minutes check");
  // do your stuff here
  
}, the_interval);

$.ajax({
	url: 'data.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	async: false,
	success: function(data){
		$(data.users).each(function(index, value){
			names.push(value.name);
		});	
		},
	complete: function(data){
		console.log("data grabbed!");
		console.log(names);
	}
});


function userInput(){
	var name = form1.elements["name"].value;
	names1.push(name);
	console.log(names1);
	for(m=0; m<names.length; m++){
		console.log(names[m]);
		console.log(names1[0]);
		if (names[m] == names1[0]){
			flag = "no";
			m = names.length;
		}
		else{
			flag = "yes";
		}
		console.log(names[m]);
		console.log(names1[0]);
		
	}
	var socket = io.connect();
      
        socket.on('date', function(data){
          $('#date').text(data.date);
        });
        $(document).ready(function(){
          $('#text').keypress(function(e){
          socket.emit('client_data', {'letter': String.fromCharCode(e.charCode)});
        });
        });
	//socket.onopen = function(event){
	//  window.set
	//var exec = require("child_process").exec;
	//app.get('/', function(req, res){exec("php test.php", function (error, stdout, stderr) {res.send(stdout);});});
	//$.post("test.php", {data: "stuff"});
	/*$.ajax({
          url:"test.php", //the page containing php script
          type: "get", //request type
	  success:function(result){
            alert(result);
			console.log("post worked! :D");
        }
        });*/
	//run python training script here! send over names parameter
	
	
};
