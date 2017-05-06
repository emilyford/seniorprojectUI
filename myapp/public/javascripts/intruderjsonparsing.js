var photos = [];
var dates = [];
var photos2 = [];
var photos3 = [];

$.ajax({
	url: 'intruderdata.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	async: false,
	success: function(intruderdata){
		$(intruderdata.intruders).each(function(index, value){
			photos.push(value.photo);
			dates.push(value.date);
		});	
		},
	complete: function(intruderdata){
		showIntruders();
	}
});

function showIntruders() {
	console.log(photos);
	console.log(photos.length);
	console.log(photos[0][10]);
	for (var x=0; x<(photos.length); x++){
		photos2 = [];
		for(var y=0; y<(photos[x].length)-7; y++){
			photos2.push(photos[x][y+7]);
		}
		photos2 = photos2.join("");
		console.log(photos2);
		photos3.push(photos2);
	}
	console.log(photos2);
	console.log(photos3);
	console.log(photos3[0]);
	for (var i=0; i<photos.length; i++) {
		console.log("<div id ='pics'><img src=\"" + photos3[i] + "\"" + " width='400' height='400'/>" + "<br>" + "<div id='username'>" + dates[i] + "</div></div>");
		document.write("<div id ='pics'><img src=\"" + photos3[i] + "\"" + " width='400' height='400'/>" + "<br>" + "<div id='username'>" + dates[i] + "</div></div>");
	
	}
};	

//'images/Intruders/'
