var names = [];
var idphotos = []; //will need another array to hold all user pics, this array will be for id photos on display
$.ajax({
	url: 'data.json',
	dataType: 'json',
	type: 'get',
	cache: true,
	async: false,
	success: function(data){
		$(data.users).each(function(index, value){
			//console.log(value); //shows values of all data
			//console.log(value.name);// grabs names of each data piece
			//console.log(value.photo1); //displays urls
			//console.log(value.name); //displays names
			names.push(value.name);
			idphotos.push(value.photo1);
		});	
		},
	complete: function(data){
		showImages();
	}
});

function showImages() {
	console.log(names);
	console.log(idphotos);
	for (i=0;i<names.length;i++) {
		document.write("<div id ='pics'><img src='" + "images/" + names[i] + "/" +  idphotos[i] + ".jpg" + "' width='400' height='400'/>" + "<br>" + "<div id='username'>" + names[i] + "</div></div>");
	
	}
};	
