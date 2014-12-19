var configTable = function() {
	
	$(".routeLine").draggable({
    helper: "clone",
    handle: "p:first-child",
    start: function(event, ui) {
    	var children = $(ui.helper[0].children);
    	ui.helper.addClass("dragged");
    	$(children[1]).hide(500);
    	$(children[3]).hide(500);
    	$(children[4]).hide(500);
    	$(children[5]).hide(500);
    }
  });

  $("#tickList").droppable({
  	drop: function(event, ui) {
  		var climb    = ui.draggable.clone(),
  				children = $(ui.draggable.clone()[0].children),
  				data     = {climb_id: climb.attr("data-id")},
  				url      = $(this).find("ol").attr("data-url");
  		$(climb).find(".ui-draggable-handle").removeClass("ui-draggable-handle");
			$(this).find("ol").append(climb);
			$.post(url, data);
  	},
  	hoverClass: "dropZoneContainer"
  });

};

$(document).ready(function(){

	var body           = $("body");
	var createTickList = "#createTickList";
	var cancelTickList = "#cancelTickList";
	var tickListForm   = "#createForm";
	var submitList     = "#confirmTickList";
	var dropDownButton = "#dropDownButton";
	var	tickListLine   = ".tickListLine";
	
	body.on("click", createTickList, function(event){
		$(dropDownButton).hide();
		$(tickListForm).show();
		$(submitList).show();
		$("#createTickList").hide();
		$("#cancelTickList").show();
	});

	body.on("click", cancelTickList, function(event){
		$(tickListLine).find("input[type=text]").val("");
		$(dropDownButton).show();
		$(tickListForm).hide();
		$(submitList).hide();
		$("#createTickList").show();
		$("#cancelTickList").hide();
	});	

	body.on("click", submitList, function(event){
		var data = $(".tickListInput").serialize(),
				url  = $("#session_user").attr("class") + "/tick_lists";
		$.post(url, data, function(serverResponse){
			var name = $(tickListLine).find("input[type=text]").val();
			$(tickListLine).find("input[type=text]").val("");
			$(".noTicKListDropDown").remove();
			$("#dropDownMenu").append(serverResponse[0]);
			$("#tickListContainer").html(serverResponse[1]);
			$("#dropDownButton").text(name);
			$("#dropDownButton").append("<span class='caret'></span>");
			$(dropDownButton).show();
			$(tickListForm).hide();
			$("#confirmTickList").hide();
			$("#cancelTickList").hide();
			$("#createTickList").show();
		});
	});

	body.on("click", ".tickListOption", function(event){
		var url = $(event.target).attr("data-url");
		$("#dropDownButton").text($(event.target).text());
		$("#dropDownButton").append("<span class='caret'></span>");
		$.get(url, function(serverResponse){
			$("#tickListContainer").html(serverResponse);
		});
	});

});