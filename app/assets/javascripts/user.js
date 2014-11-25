$(document).ready(function(){
	var userFormContainer = $('.userFormContainer');
	var searchBar = $('.searchBar');
	var searchLimiter = 1;
	var lastSearch = ""
  window.setInterval(function(event){
  	if (searchLimiter > 1 ) {
  		searchLimiter -= 1
  	}
	}, 1000);

	$('.container').delegate('.searchBar', 'keyup', function(event){
		if ($('#searchForm').serialize() !== lastSearch ) {
			if (searchLimiter === 1) {
				searchLimiter += 2;
				$('#searchForm').submit();
			}
		}
	});

	$('.container').on('submit', '#searchForm', function(event){
		event.preventDefault();
		var form = $('#searchForm'),
				data = form.serialize(),
				url = '/search',
				appendArea = $('.searchResults');
		$.post(url, data, function(serverResponse){
			appendArea.html(serverResponse);
			lastSearch = data
		});
	})

	$('.container').on('click', '#userFeedNav', function(event){
		console.log('im here');
		event.preventDefault();
		userFormContainer.children().hide();
		$('#userFeed').show();
	});

	$('.container').on('click', '#userRoutesNav', function(event){
		console.log('im here');
		event.preventDefault();
		userFormContainer.children().hide();
		$('#userRoutes').show();
	});



})