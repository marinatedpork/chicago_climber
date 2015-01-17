var routes = {};
var resultIds;
	
var parseRoutes = function(serverResponse) {
	var routeString  = "<ol>";
	for (var i = 0; i < serverResponse.length; i++) {
  	routeString += routes[serverResponse[i]].searchResultView($("#location-sort").attr("data-sort"));
		}
	routeString += "</ol>";
	return routeString;
};

$(document).ready(function(){

	var searchBar = $('.searchBar');
	var sort_navs = ["#name-sort", "#category-sort", "#rating-sort", "#height-sort", "#pitch-sort", "#location-sort", "#wall-sort"];
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
			resultIds = serverResponse;
			var parsedResults = parseRoutes(serverResponse);
			appendArea.html(parsedResults);
			configTable();
			$('[data-toggle="tooltip"]').tooltip({
				container: 'body'
			});
		});
	});

	$.each(sort_navs, function(index, obj){
		$('body').on('click', obj, function(event){
			var climbs = climbSort(resultIds, $(obj).attr("data-sort"), $(obj).attr("class"));
			var sortedRoutes = mapHTML(climbs, $(obj).attr("data-sort"));
			$('.searchResults').html(sortedRoutes);
			$(obj).find("i").toggleClass('fa-caret-up fa-caret-down');
			$(obj).toggleClass('up down');
			$('[data-toggle="tooltip"]').tooltip({
					container: 'body'
			});
			configTable();
		});
	});

	$('body').on('click', '#location-drop-down', function(event){
		$("#location-subsort-menu").slideToggle(150);
	});

	$('body').on('click', ".location-subsort", function(event){
		var val = $(event.target).text();
		$("#location-sort-text").text(val);
		$("#location-sort").attr("data-sort", val);
		var sortedRoutes = mapHTML(climbSort(resultIds, $("#location-sort").attr("data-sort"), $("#location-sort").attr("class")), val);
		$('.searchResults').html(sortedRoutes);
		$("#location-sort").find("i").toggleClass('fa-caret-up fa-caret-down');
		$("#location-sort").toggleClass('up down');
		$('[data-toggle="tooltip"]').tooltip({
				container: 'body'
		});
		configTable();
	});

});