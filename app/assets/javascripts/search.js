var routes = [];
	
var parseRoutes = function(serverResponse) {
	var routeString  = "<ol>";
	for (var i = 0; i < serverResponse.length; i++) {
  	var index = parseInt(serverResponse[i]);
  	routeString += routes[index - 1].searchResultView();
		}
	routeString += "</ol>";
	return routeString;
}

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
		});
	});

	$.each(sort_navs, function(index, obj){

		var findDirection = function(obj){
			if ($(obj).find(".down")) {
				return "down";
			} else {
				return "up";
			};
		};

		var oppositeDirection = function(dir){
			return dir == "up" ? "down" : "up";
		}

		$('body').on('click', obj, function(event){
			var query_string = $(".searchBar").val(),
					appendArea = $('.searchResults'),
					url = '/search',
					sort = $(obj).attr("data-sort"),
					direction = $(obj).attr("class"),
					data = { 
						search: query_string,
						sort_type: sort,
						direction: direction
					};
			$(obj).find("i").toggleClass('fa-caret-up fa-caret-down');
			$(obj).toggleClass('up down');
			console.log(data);
			$.post(url, data, function(serverResponse){
				var parsedResults = parseRoutes(serverResponse);
				appendArea.html(parsedResults);
				configTable();
			});
		});
	})

	


});