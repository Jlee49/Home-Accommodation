function deleteInterest(propertyName){
	let propertyDetails = JSON.parse(localStorage.getItem("properties"));
	for(var i=0; i < propertyDetails.length; i++){
		if (propertyName === propertyDetails[i].name){
			delete propertyDetails[i];
		}
	}
	propertyDetails = propertyDetails.filter(item => item);
	localStorage.setItem("properties", JSON.stringify(propertyDetails));
	location.reload();
	
}