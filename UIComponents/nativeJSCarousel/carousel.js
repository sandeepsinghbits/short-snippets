var carousel = document.getElementsByClassName('carousel')[0];

var carouselEle = [],carouselLeftIndex=1,carouselRightIndex=1;
for (var i = 0; i < carousel.childNodes.length; i++) {
    if (carousel.childNodes[i].className == "content") {
      carouselEle.push(carousel.childNodes[i]);
      
    }        
}



function moveCarouselLeft(){
	if( carouselLeftIndex <carouselEle.length) {
		for(var index=0;index<carouselEle.length;index++){
			var transformVal = -(carouselLeftIndex*100);
			carouselEle[index].style.transform="translateX("+transformVal+"%)";
		}
		carouselLeftIndex = carouselLeftIndex+1;
	}
		
}


function moveCarouselRight(){
	
	if(carouselLeftIndex > 1){
		var multilier = (carouselLeftIndex -2);
		for(var index=0;index<carouselEle.length;index++){
			var transformVal = -(multilier*100);
			carouselEle[index].style.transform="translateX("+transformVal+"%)";
		}	
		carouselLeftIndex= carouselLeftIndex -1;
	}
	
		
}
