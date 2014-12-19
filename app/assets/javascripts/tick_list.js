var configTable = function() {
	
	$(".routeLine").draggable({
    helper: "clone",
    start: function(event, ui) {
    	$(ui.helper).addClass("dragged")
    }
  });

  $("#tickList").droppable({
  	drop: function(event, ui)  {
  		var climb = ui.draggable.clone(),
  				data  = {climb_id: climb.attr("data-id")},
  				url   = $(this).find("ol").attr("data-url");
		$(this).find("ol").append(climb);
		$.post(url, data, function(serverResponse){});
  	}
  });

};

$(document).ready(function(){

	var body           = $("body");
	var createTickList = "#createTickList";
	var tickListForm   = "#createForm";
	var submitList     = "#submitList";
	var dropDownButton = "#dropDownButton";
	var	tickListLine    = ".tickListLine";

	body.on("click", createTickList, function(event){
		if ($(dropDownButton).is(":visible")){
			$(dropDownButton).hide();
			$(tickListForm).show();
			$(".fa-plus-circle").hide();
			$(".fa-check-square").show();
		} else {
			var data = $(".tickListInput").serialize(),
					url  = $("#session_user").attr("class") + "/tick_lists"
			$.post(url, data, function(serverResponse){
				var name = $(tickListLine).find("input[type=text]").val();
				$(tickListLine).find("input[type=text]").val("");
				$(".noTicKListDropDown").remove();
				$("#dropDownMenu").append(serverResponse[0]);
				$("#tickListContainer").html(serverResponse[1]);
				$("#dropDownButton").text(name);
				$("#dropDownButton").append("<span class='caret'></span>")
				$(dropDownButton).show();
				$(tickListForm).hide();
				$(".fa-check-square").hide();
				$(".fa-plus-circle").show();
			});
		}
	});

	body.on("click", submitList, function(event){
		var data = $(".tickListInput").serialize(),
				url  = $("#session_user").attr("class") + "/tick_lists"
		$.post(url, data, function(serverResponse){
			$(".noTicKListDropDown").remove();
			$("#tickListDropDown").append(serverResponse[0]);
			$("#tickListContainer").html(serverResponse[1]);
		});
	});

	body.on("click", ".tickListOption", function(event){
		var url = $(event.target).attr("data-url");
		$("#dropDownButton").text($(event.target).text());
		$("#dropDownButton").append("<span class='caret'></span>")
		$.get(url, function(serverResponse){
			$("#tickListContainer").html(serverResponse)
		});
	});

});