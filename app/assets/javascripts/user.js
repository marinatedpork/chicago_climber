$(document).ready(function(){
	var userShowContainer = $('.userShowContainer');

	$('.container').on('click', '#userFeedNav', function(event){
		event.preventDefault();
		$('#userRoutes').hide();
		$('#userFeed').show();
	});

	$('.container').on('click', '#userRoutesNav', function(event){
		event.preventDefault();
		$('#userFeed').hide();
		$('#userRoutes').show();
	});

})