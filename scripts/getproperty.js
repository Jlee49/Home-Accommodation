$(document).on("pagecontainerbeforeshow", function (e, ui){
	let page = ui.toPage[0].id;
	if(page == "interests"){
		if (typeof(Storage) != "undefined"){
			displayPropertyDetails();
		}
		else{
			$("#nostorage").text("The browser does not support storage");
		}
	}
});

function displayPropertyDetails(){
		if (JSON.parse(localStorage.getItem("properties")) === null || JSON.parse(localStorage.getItem("properties")) === ""){
			return;
		}
		let propertyDetails = JSON.parse(localStorage.getItem("properties"));
		property = "";
		var i=0;
		for (var selectedProperty of propertyDetails){
			property = property 
			+ "<div data-role=\"controlgroup\" data-type=\"horizontal\"><a href=\"" + selectedProperty.propertyurl 
			+ ".html\" data-role=\"button\" class=\"ui-btn ui-corner-all ui-icon-arrow-r ui-btn-icon-right\">" 
			+ selectedProperty.name + "</a><a href=\"#\" onclick=\"deleteInterest('" + selectedProperty.name + "')\">Remove " 
			+ selectedProperty.name + "</a></div>";
		}
		$("#property").html(property);
}