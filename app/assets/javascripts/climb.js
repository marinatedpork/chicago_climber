$(document).ready(function(){

	var searchBar = $('.searchBar');
	var routes;

	var configTable = function() {
		$(".routeLine").draggable({
	    helper: "clone"
	  });

	  $("#tickList").droppable({
	  	drop: function(event, ui)  {
  		 $(this).find("ol").append(ui.draggable.clone());
	  	}
	  });
	}

	var parseRoutes = function(serverResponse) {
		var routeString  = "<ol>";
		for (var i = 0; i < serverResponse.length; i++) {
    	var index = parseInt(serverResponse[i]);
    	routeString += routes[index - 1];
 		}
		routeString += "</ol>";
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
				appendArea = $('.searchResults');
		$.post(url, data, function(serverResponse){
			parsedResults = parseRoutes(serverResponse);
			appendArea.html(parsedResults);
			configTable();
		});
	});



});