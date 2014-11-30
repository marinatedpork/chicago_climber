$(document).ready(function(){

	var routes;

	$.get('/climbs', function(serverResponse){
		console.log(serverResponse)
		routes = serverResponse
	});

});