var Climb = function(attr) {
	this.id = attr.id;
	this.name = attr.name;
	this.category = attr.category;
	this.rating = attr.rating;
	this.integer_rating = parseInt(attr.integer_rating);
	this.height = parseInt(attr.height);
	this.pitches = parseInt(attr.pitches);
	this.url = attr.url;
	this.state = attr.state_id || "--";
	this.area = attr.area_id || "--";
	this.subarea = attr.subarea_id || "--";
	this.wall = attr.wall_id || "--";
	this.crag = attr.crag_id || "--";
	this.section = attr.section_id || "--";
	this.face = attr.face_id || "--";
};

Climb.prototype.locationString = function() {
	var locations = [this.state, this.area, this.subarea, this.crag, this.section, this.face],
			string = "";
	locations.forEach(function(obj, index, locations){
		if ( obj === "--") {
			return;
		}
		else if (index === 0) {
			string += obj.replace(/"|'/g, '&apos;');;
		} else if (obj) {
			string += " > " + obj.replace(/"|'/g, '&apos;');;
		} else {
			return;
		};
	});
	return string;
};

Climb.prototype.searchResultView = function(val) {
	var neededShit = {category: this.category, rating: this.rating, height: this.height, pitches: this.pitches},
			html_string = "<li data-id='"+this.id+"' class='routeLine'><p class='name inline-block center-text ui-draggable-handle'>"+this.listName()+"</p>",
			tooltip = this.locationString();
	for (var key in neededShit) {
		if (neededShit[key]) {
			html_string += "<p class='"+key+" inline-block' >"+neededShit[key]+"</p>";
		} else {
			html_string += "<p class='"+key+" inline-block'>--</p>";
		}

	}
	return html_string += "<p class='"+this.locationAttrView(val)+" inline-block' title='"+tooltip+"' data-toggle='tooltip' data-placement='bottom'>"+this[this.locationAttrView(val)]+"</p><p class='wall inline-block'>"+this.listWall()+"</p><p class='inline-block float-right link-icon'><a href='"+this.url+"', target='_blank'><i class='fa fa-external-link'></i></a></p></li>";
};

Climb.prototype.tickListView = function() {
	var html_string = "<li data-id='"+this.id+"' class='tickListItem'><p class='inline-block route-name center-text'>"+this.name+"</p>";
	html_string += "<div class='tick-list-sub-line'><span class='category'>"+this.category+"</span>";
	html_string += "<span class='rating'>"+this.rating+"</span>";
	return html_string += "<span class='state'>"+this.state+"</span><i class='fa fa-trash float-right delete-climb pointer'></i></div></li>"
};

Climb.prototype.locationAttrView = function(val) {
	location_things = ["area",	"subarea", "crag",	"section",	"face"]
	return location_things.indexOf(val) > -1 ? val : "state"
};

Climb.prototype.listName = function() {
	if (this.name.length > 17) {
		return this.name.slice(0, 17) + "...";
	} else {
		return this.name;
	};
};

Climb.prototype.listWall = function() {
	if (this.wall){
		if (this.wall.length > 17) {
			return this.wall.slice(0, 15) + "..."
		} else {
			return this.wall;
		};
	};
	return;
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
