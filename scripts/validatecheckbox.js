/*Used this to help me for this js:
https://stackoverflow.com/questions/2684434/can-i-use-jquery-to-check-whether-at-least-one-checkbox-is-checked*/
function validateCheckBox(){
		if($("#registerform input:checked").length > 0) {
			$(location).attr('href', 'registercomplete.html');
		}
		else{
			return;
		}
}
