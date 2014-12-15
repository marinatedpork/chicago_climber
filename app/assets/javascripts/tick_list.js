var configTable = function() {
	$(".routeLine").draggable({
    helper: "clone"
  });

  $("#tickList").droppable({
  	drop: function(event, ui)  {
  		var climb = ui.draggable.clone(),
  				data  = {climb_id: climb.attr("data-id")},
  				url   = $(this).find("h4").attr("data-url");
  	console.log(data);
		$(this).find("ol").append(climb);
		$.post(url, data, function(serverResponse){});
  	}
  });
}

$(document).ready(function(){
	var body           = $("body");
	var createTickList = "#createTickList";
	var tickListForm   = "#createForm";
	var submitList     = "#submitList";
	body.on("click", createTickList, function(event){
		$(tickListForm).slideToggle();
	});

	body.on("click", submitList, function(event){
		var data = $(".tickListInput").serialize(),
				url  = $("#session_user").attr("class") + "/tick_lists"
		$.post(url, data, function(serverResponse){
			$(".noTicKListDropDown").remove();
			$("#tickListDropDown").append(serverResponse[0]);
			$("#tickListContainer").html(serverResponse[1]);
		})
	});

	body.on("change", "#tickListDropDown", function(event){
		var url = $("#tickListDropDown :selected").attr("data-url")
		$.get(url, function(serverResponse){
			$("#tickListContainer").html(serverResponse)
		})
	})

});