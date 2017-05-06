var dates = [];
var intphotos = []; //will need another array to hold all user pics, this array will be for id photos on display
$.ajax({
	url: 'intruderdata.json',
	dataType: 'json',
	type: 'get',
	cache: true,
	async: false,
	success: function(data){
		$(data.users).each(function(index, value){
			//console.log(value); //shows values of all data
			//console.log(value.data);// grabs names of each data piece
			//console.log(value.photo); //displays urls
			//console.log(value.date); //displays names
			dates.push(value.date);
			intphotos.push(value.photo);
			console.log("Something is happening");
			console.log(dates);
			console.log(intphotos);
		});	
		},
	complete: function(data){
		showImages();
	}
});

function showImages() {
	//console.log(dates);
	//console.log(intphotos);
	for (i=0;i<dates.length;i++) {
		document.write("<div id ='pics'><img src='" + "images/" + dates[i] + "/" +  intphotos[i] + ".jpg" + "' width='400' height='400'/>" + "<br>" + "<div id='username'>" + dates[i] + "</div></div>");
	
	}
};	
