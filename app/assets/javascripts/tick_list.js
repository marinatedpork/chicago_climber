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
    	$(children[6]).hide(500);
    	$(children[7]).hide(500);
    }
  });

  $("#tickList").droppable({
	  tolerance: "pointer",
  	drop: function(event, ui) {
  		var climb    = ui.draggable.clone(),
  				data     = {climb_id: climb.attr("data-id")},
  				url      = $(this).find("ol").attr("data-url") + "/add_appearance";
  				success  = $("#dropSuccess");
  		$(climb).find(".ui-draggable-handle").removeClass("ui-draggable-handle");
			$(this).find("ol").append(routes[climb.attr("data-id") - 1].tickListView());
			$.post(url, data);
			success.css({"z-index": "996"});
			success.fadeOut(1333, function(){
				success.css({"z-index": "-2"}).show()
			});
  	},
  	hoverClass: "dropZoneContainer"
  });

  // $(".route-name").width(widestChild(".route-name"));

};

$(document).ready(function(){

	var body           = $("body");
	var createTickList = "#createTickList";
	var cancelTickList = "#cancelTickList";
	var tickListForm   = "#createForm";
	var submitList     = "#confirmTickList";
	var dropDownButton = "#dropDownButton";
	var	tickListLine   = ".tickListLine";

	var showDropDown = function() {
		$(dropDownButton).show();
		$(tickListForm).hide();
		$("#confirmTickList").hide();
		$("#cancelTickList").hide();
		$("#createTickList").show();
	}

	var bindCreateList = function(){
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
				showDropDown();
			});
		});
	};
	
	var bindEditList = function(url){
		body.on("click", submitList, function(event){
			var data    = $(".tickListInput").serialize(),
					editUrl = url + "/edit",
					name    = $(tickListLine).find("input[type=text]").val();
			$.post(editUrl, data, function(serverResponse){
				$(tickListLine).find("input[type=text]").val("");
				$("#dropDownMenu").find("span[data-url='"+url+"']").text(name);
				$("#tickListContainer").html(serverResponse);
				$("#dropDownButton").text(name);
				$("#dropDownButton").append("<span class='caret'></span>");
				$("body").off("click", submitList);
				bindCreateList();
				showDropDown();
			});
		});
	};

	bindCreateList();

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
		$(createTickList).unbind("click");
		bindCreateList();
	});	

	body.on("click", ".tickListOption", function(event){
		var url = $(event.target).attr("data-url");
		$("#dropDownButton").text($(event.target).text());
		$("#dropDownButton").append("<span class='caret'></span>");
		$.get(url, function(serverResponse){
			$("#tickListContainer").html(serverResponse);
		});
	});

	body.on("click", ".delete-list", function(event){
		var url = $(event.target).parent().find(".tickListOption").attr("data-url") + "/delete",
				par = $(event.target).parent();
		$.get(url, function(){
			par.remove();
		});
	});

	body.on("click", ".edit-list", function(event){
		var text = $(event.target).parent().find(".tickListOption").text();
		var url = $(event.target).parent().find(".tickListOption").attr("data-url");
		console.log(url);
		$("body").off("click", submitList);
		$(dropDownButton).hide();
		$(tickListForm).show();
		$(submitList).show();
		$("#createTickList").hide();
		$("#cancelTickList").show();
		$(tickListLine).find("input[type=text]").val(text);
		bindEditList(url);
	});

});