var routes = [];
var lastQuery;
	
var parseRoutes = function(serverResponse) {
	var routeString  = "<ol>";
	for (var i = 0; i < serverResponse.length; i++) {
  	var index = parseInt(serverResponse[i]);
  	routeString += routes[index - 1].searchResultView();
		}
	routeString += "</ol>";
	return routeString;
};

var addToolTips = function(results){
	results.forEach(function(obj, index, results){
		routes[obj].setLocationToolTip();
	});
};

$(document).ready(function(){

	var searchBar = $('.searchBar');
	var sort_navs = ["#name-sort", "#category-sort", "#rating-sort", "#height-sort", "#pitch-sort", "#location-sort", "#wall-sort"];
	$("i.fa-caret-up").hide();
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
			var parsedResults = parseRoutes(serverResponse);
			appendArea.html(parsedResults);
			configTable();
			lastQuery = $(".searchBar").val();
			$('[data-toggle="tooltip"]').tooltip({
				container: 'body'
			});
		});
	});

	$.each(sort_navs, function(index, obj){
		$('body').on('click', obj, function(event){
			var appendArea = $('.searchResults'),
					data = { 
						search: lastQuery,
						sort_type: $(obj).attr("data-sort"),
						direction: $(obj).attr("class")
					};
			$(obj).find("i").toggleClass('fa-caret-up fa-caret-down');
			$(obj).toggleClass('up down');
			$.post('/search', data, function(serverResponse){
				var parsedResults = parseRoutes(serverResponse);
				appendArea.html(parsedResults);
				configTable();
				$('[data-toggle="tooltip"]').tooltip({
				container: 'body'
			});
			});
		});
	})

	


});