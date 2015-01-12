$(document).ready(function(){

	var userFormContainer = $('.userFormContainer');

	if ($("#session_user").is('*')) {
		var url = $("#session_user").attr("class");
		$.get(url, function(serverResponse){
			userShowSetup();
			userFormContainer.empty();
			$(serverResponse).hide().appendTo(userFormContainer).delay(1000).fadeIn(1500)
			$('#userFeed').hide();
			$("#createForm").hide();
			$("#confirmTickList").hide();
			$("#cancelTickList").hide();
			$("#dropImg").ClassyWiggle();
		});
	};

	$.get('/climbs', function(serverResponse){
		routes = serverResponse;
		var htmlString = "<ol>";
		$.each(routes.slice(0,49),function(index, value){
			htmlString += value
		});
		htmlString += "</ol>"
		$('.searchResults').append(htmlString);
	});

	$("body").on("click", "#userLogoutNav", function(event) {
		event.preventDefault();
		$.get('/logout', function(serverResponse){
			window.location.reload(true);
		});
	});

});