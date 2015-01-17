$(document).ready(function(){

	var menu = $("#context-menu");

	$('body').on('contextmenu', '.routeLine p', function(event){
		event.preventDefault();
		var node = $(event.target),
				number_stuff = ["rating", "height", "pitches"],
				val = node.text(),
				constraint = node.attr("class").split(" ")[0],
				x =  event.pageX,
				y =  event.pageY;

		menu.attr('data-filter', constraint);
		menu.attr('data-value', node.parent().attr("data-id"));
		
		if (number_stuff.indexOf(constraint) > - 1) {
			menu.find('.filter-keep').text("Show "+constraint + "s of " + val);
			menu.find('.filter-keep-greater-than').text("Show "+constraint + "s > " + val).show();
			menu.find('.filter-keep-less-than').text("Show "+constraint + "s < " + val).show();
			menu.find('.filter-remove').text("Remove "+constraint + "s of " + val);
			menu.find('.filter-remove-greater-than').text("Remove "+constraint + "s > " + val).show();
			menu.find('.filter-remove-less-than').text("Remove "+constraint + "s < " + val).show();
		} else {
			menu.find('.filter-keep').text("Show "+constraint + "s of " + val);
			menu.find('.filter-remove').text("Remove "+constraint + "s of " + val);
			menu.find('.filter-remove-greater-than').text("Remove "+constraint + "s of " + val).hide();
			menu.find('.filter-remove-less-than').text("Remove "+constraint + "s of " + val).hide();
			menu.find('.filter-keep-greater-than').text("Show "+constraint + "s of " + val).hide();
			menu.find('.filter-keep-less-than').text("Show "+constraint + "s of " + val).hide();
		};		
		$("#context-menu").css({"display": "block", "top": y, "left": x, "z-index": "9999"});
	}); 	

	$(document).on('mousedown', function(event) { 
    if(!$(event.target).closest('#context-menu').length) {
      if ($('#context-menu').is(":visible")) {
        $('#context-menu').hide();
        $('#context-menu').css({"z-index": "-2"});
      }
    }        
	});



	menu.on("click", "a", function(event){

		event.preventDefault();

		var climbs = [];
 
    $('#context-menu').hide();
    $('#context-menu').css({"z-index": "-2"});

    $.each(resultIds, function(index, obj){
    	console.log(routes[obj][menu.attr('data-filter')]);
    	console.log(routes[obj][menu.attr('data-filter')] === routes[menu.attr('data-value')][menu.attr('data-filter')]);
    	console.log(routes[menu.attr('data-value')][menu.attr('data-filter')]);
			if (routes[obj][menu.attr('data-filter')] === routes[menu.attr('data-value')][menu.attr('data-filter')]) {
	    	climbs.push(routes[obj]);
	    	}
    });

    $(".searchResults").html(mapHTML(climbs, $("#location-sort").attr('data-sort')));

	});

});