var names = [];
var idphotos = []; //will need another array to hold all user pics, this array will be for id photos on display
var idphotos2 = [];
var photourl;
$.ajax({
	url: 'data.json',
	dataType: 'json',
	type: 'get',
	cache: false,
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
	var photourl;
	console.log(idphotos[0][0]);
	console.log(idphotos[0]);

	for (var i=0; i<names.length; i++) {
		console.log(idphotos[i].length);
		for(var y=0; y<((idphotos[i].length)-7); y++){
			if (y==0){
				idphotos2 = [];
			}
			console.log(idphotos);
			console.log(y);
			console.log(idphotos[0]);
			console.log(idphotos[i][y+7]);
			idphotos2 = idphotos2 + idphotos[i][y+7];	
			console.log(idphotos2);
		}

			/*for(var x=0; x<((idphotos[i][x].length) - 8); x++){
				if(x==0){
					photourl = [];	
				}
				idphotos2[x] = idphotos2 + idphotos[i][x + 8];
				console.log(idphotos2); //38
				console.log(x);
        	}
			*/
		console.log(i);	
		//photourl = idphotos2.join("");
	    console.log("idphotos2 is:");
        console.log(idphotos2);
		console.log("<div id ='pics'><img src=\"" + idphotos2 + "\"" + " width='400' height='400'/>" + "<br>" + "<div id='username'>" + names[i] + "</div></div>");
		document.write("<div id ='pics'><img src=\"" + idphotos2 + "\"" + " width='400' height='400'/>" + "<br>" + "<div id='username'>" + names[i] + "</div></div>");
	
	}
};	


