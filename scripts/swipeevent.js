/*Used: https://titan.dcs.bbk.ac.uk/~lbrod03/ass/scripts/photoslide.js as a guide*/
$(document).on("pagecontainershow", function(e, ui){
	photogallery();
});

/*Puts all image paths into an array*/
function photogallery(){
	var photo1 = 'images/house1.jpg';
	var photo2 = 'images/house1-2.jpg';
	var photo3 = 'images/house1-3.jpg';
	var counter = 0;
	var gallery = [photo1, photo2, photo3];

/*In function prevImg(), if counter is 0, counter is returned and the image does not change since photo1 is in 
counter 0 and is the leftmost image in the gallery. Otherwise it will decrement counter by 1 and display the img
in the gallery using the new value of counter as the index*/
	function prevImg(){
		if(counter === 0){
			return counter;
		}
		else{
			counter--;
			document.getElementById('photo1').src = gallery[counter];
			displayArrows()
		}
	}

/*In function nextImg(), if counter is less than 2 which is the highest index the gallery contains, it means the
there are images to the right of it therefore the counter will increment by 1 and the id with photo1 will display
the image in the gallery array with the new value of counter as the index*/
	function nextImg(){
		if (counter < 2){
			counter++;
			document.getElementById('photo1').src = gallery[counter];
			displayArrows()
			}
		else{
			return counter;
		}
	}

/*In function displayArrows(), depending on what the counter is, it will change how the arrows look like on the gallery*/
function displayArrows(){
	var backArrow = document.getElementById("back");
	var nextArrow = docuemnet.getElementById("next");
	if (counter === 0){
		backArrow.classList.add("invisible");
		nextArrow.classList.remove("invisible");
	}
	if (counter === 1){
		backArrow.classList.remove("invisible");
		nextArrow.classList.remove("invisible");
	}
	if (counter === 2){
		backArrow.classList.remove("invisible");
		nextArrow.classList.add("invisible");
	}
}	
	
/*The functions below determine what happens when the user swipes left and swipes right. Swiping left will
call the function nextImg() and swiping left will call the function prevImg().*/
	$("#popup").on('swiperight', function(event){
		prevImg();
	})
	$("#popup").on('swipeleft', function(event){
		nextImg();
	})
	
	$("#next").on("click", function (e) {
		nextImg();
	});
	
	$("#back").on("click", function (e) {
		prevImg();
	});
}