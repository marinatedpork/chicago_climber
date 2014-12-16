$(document).ready(function(){

	var userFormContainer = $('.userFormContainer');

	if ($("#session_user").is('*')) {
		var url = $("#session_user").attr("class");
		$.get(url, function(serverResponse){
			userShowSetup();
			userFormContainer.html(serverResponse)
			$('#userFeed').hide();
			$("#createForm").hide();
		});
	};

	$.get('/climbs', function(serverResponse){
		routes = serverResponse
	});

	$("body").on("click", "#userLogoutNav", function(event) {
		event.preventDefault();
		$.get('/logout', function(serverResponse){
			window.location.reload(true);
		});
	});

});