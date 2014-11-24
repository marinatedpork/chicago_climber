$(document).ready(function(){
	var userFormContainer = $('.userFormContainer');

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