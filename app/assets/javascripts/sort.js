var climbSort = function(results, attr, dir) {

	var currentAttribute = attr;

	var biggestSmallest = function(number1, number2) {
	      return number2[currentAttribute] - number1[currentAttribute];
	}

	var smallestBiggest = function(number1, number2) {
	      return number1[currentAttribute] - number2[currentAttribute];
	}

	var climbs = [],
			number_stuff = ["id", "height", "pitches"];

	results.forEach(function(obj, index, results){
		climbs.push(routes[parseInt(obj)]);
	});

	switch(attr) {

		case "rating":
			if (dir === "up") {
				currentAttribute = "integer_rating";
				return climbs.sort(smallestBiggest);
			} else {
				currentAttribute = "integer_rating";
				return climbs.sort(biggestSmallest);
			}
		break;
		case "pitches":
			if (dir === "up") {
				return climbs.sort(smallestBiggest);
			} else {
				return climbs.sort(biggestSmallest);
			}
		break;
		case "height":
			if (dir === "up") {
				return climbs.sort(smallestBiggest);
			} else {
				return climbs.sort(biggestSmallest);
			}
		break;
		case "id":
			if (dir === "up") {
				return climbs.sort(smallestBiggest);
			} else {
				return climbs.sort(biggestSmallest);
			}
		break;
		default:
			if (dir === "up") {
				return climbs.sort(function(a, b) {
			    var attrOne = a[attr].toUpperCase();
			    var attrTwo = b[attr].toUpperCase();
			    return (attrOne < attrTwo) ? -1 : (attrOne > attrTwo) ? 1 : 0;
				});
			} else {
				return climbs.sort(function(a, b) {
			    var attrOne = a[attr].toUpperCase();
			    var attrTwo = b[attr].toUpperCase();
			    return (attrOne > attrTwo) ? -1 : (attrOne < attrTwo) ? 1 : 0;
				});
			};
	};

};

var mapHTML = function(arr, view) {
	var string = "<ol>"
	string += arr.map(function(climb){
		return climb.searchResultView(view);
	}).join('');
	return string += "</ol>"
};