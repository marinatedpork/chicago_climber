var Climb = function(attr) {
	this.id = attr.id;
	this.name = attr.name;
	this.category = attr.category;
	this.rating = attr.rating;
	this.integer_rating = parseInt(attr.integer_rating);
	this.height = parseInt(attr.height);
	this.pitches = parseInt(attr.pitches);
	this.url = attr.url;
	this.state = attr.state_id;
	this.area = attr.area_id;
	this.subarea = attr.subarea_id;
	this.wall = attr.wall_id;
	this.crag = attr.crag_id;
	this.section = attr.section_id;
	this.face = attr.face_id;
};

Climb.prototype.searchResultView = function() {
	var needed_shit = [this.category, this.rating, this.height, this.pitches, this.state],
			html_string = "<li data-id='"+this.id+"' class='routeLine'><p class='inline-block route-name center-text'>"+this.listName()+"</p>";

	needed_shit.forEach(function(obj, index, needed_shit){
		if (obj) {
			html_string += "<p class='inline-block'>"+obj+"</p>";
		} else {
			html_string += "<p class='inline-block'>--</p>";
		}
	});
	return html_string += "<p class='inline-block'>"+this.listWall()+"</p><p class='inline-block float-right link-icon'><a href='"+this.url+"', target='_blank'><i class='fa fa-external-link'></i></a></p></li>";
};

Climb.prototype.tickListView = function() {
	var html_string = "<li data-id='"+this.id+"' class='tickListItem'><p class='inline-block route-name center-text'>"+this.name+"</p>";
	html_string += "<div class='tick-list-sub-line'><span class='category'>"+this.category+"</span>";
	html_string += "<span class='rating'>"+this.rating+"</span>";
	return html_string += "<span class='state'>"+this.state+"</span><i class='fa fa-trash float-right delete-climb pointer'></i></div></li>"
};

Climb.prototype.listName = function() {
	if (this.name.length > 17) {
		return this.name.slice(0, 17) + "...";
	} else {
		return this.name;
	};
};

Climb.prototype.listWall = function() {
	if (this.name.length > 17) {
		return this.wall.slice(0, 15) + "..."
	} else {
		return this.name;
	};

};

$(document).ready(function(){
	$("body").on("click", ".delete-climb", function(event){
		var id = $(event.target).parent().parent().attr("data-id"),
		url = $("body").find("#tickListContainer ol").attr("data-url") + "/delete_climb/" + id,
		par = $(event.target).parent().parent();
		$.get(url, function(){
			par.hide(200, function(){
				par.remove()
			});
			;
		});
	});
});

// get the selecting correct on the data-url for the ajax and then boom