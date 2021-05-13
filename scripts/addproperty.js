/*I used parts of code from this page for this js file: https://titan.dcs.bbk.ac.uk/~gordon/mad/session8/zedlandhotels/scripts/addhotel.js*/
$(document).on("pagecreate", function(){
	$("#addedmessage").hide();
	$("#addbtn").click(function(){
		if ((typeof(Storage)) != "undefined") {
			$("#addedmessage").show();
			setDetails(getTitle(), getUrl());
		}
		else{
			$("#nostorage").text("No local storage");
		}
	});
	$("#addbtn").text("Add to interest list");
	
	if ("properties" in localStorage){
		propertyDetails = JSON.parse(localStorage.getItem("properties"));
		for (var current of propertyDetails){
			if (current.name === getTitle()){
				$("#addbtn").text("Added to interest list");
				break;
			}
		}
	}
});

function getTitle() {
	var title = $("#propertytitle").text();
	return title;
}

function getUrl(){
	var title = $("#propertytitle").text();
	var url = title.replace(/\s+/g, '-').toLowerCase();
	return url;
}

function setDetails(title, url){
	if (localStorage.getItem("properties") === "[]" || localStorage.getItem("properties") === null){
		var current = [{name: title, propertyurl: url}];
		localStorage.setItem("properties", JSON.stringify(current));

	}
	else{
		var current = JSON.parse(localStorage.getItem("properties"));
		for (var current of current)
		{
			if (current.name === getTitle()){
			return;
			}
		}
		var current = JSON.parse(localStorage.getItem("properties"));
		var property = {name: title, propertyurl: url};
		current.push(property);
		localStorage.setItem("properties", JSON.stringify(current));

	}
}