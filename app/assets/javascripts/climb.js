$(document).ready(function(){

  var searchTable = $('#searchResults').DataTable();
	var searchBar   = $('.searchBar');
	var routes;


	var configTable = function() {
		$(".routeLine").draggable({
	    helper: "clone"
	  });
	}


	var parseRoutes = function(serverResponse) {
		var routeString  = "";
		for (var i = 0; i < serverResponse.length; i++) {
    	var index = parseInt(serverResponse[i]);
    	routeString += routes[index - 1];
 		}
		// routeString += "</ol>";
		return routeString;
	}


	$.get('/climbs', function(serverResponse){
		routes = serverResponse
	});

	$('.container').delegate('.searchBar', 'keyup', function(event){
			$('#searchForm').submit();
	});

	$('.container').on('submit', '#searchForm', function(event){
		event.preventDefault();
		var form = $('#searchForm'),
				data = form.serialize(),
				url = '/search',
				appendArea = $('#searchResults tbody');
		$.post(url, data, function(serverResponse){
			parsedResults = parseRoutes(serverResponse);
			appendArea.html(parsedResults);
			configTable();
		});
	});



});