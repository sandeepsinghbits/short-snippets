

var imgContainerClass = 'imgContainer';
var loaderClass = 'loader';
var imageClass = "image";
var imgContainer = document.getElementsByClassName(imgContainerClass);

var divCount = imgContainer.length;
var addOnScroll = 1;
var targetEleHeight = imgContainer[0].offsetHeight;
var visibilityHidden = {

};
var parentScroll = document.getElementsByClassName('scroll')[0];
var documentFrag;
var timeout = null;
parentScroll.addEventListener('scroll',function(event){
  var target = event.target;
  var currentDiv = Math.round(target.scrollTop/targetEleHeight);
  var prevDiv = currentDiv-1;
  if(visibilityHidden[prevDiv]){
    imgContainer[prevDiv].classList.remove('hidden');
    imgContainer[prevDiv].children[0].classList.remove('hidden');
    visibilityHidden[prevDiv] = false
  } 
  if(divCount - currentDiv ==1 && timeout == null){
      parentScroll.classList.add(loaderClass);
      timeout = fetch('https://source.unsplash.com/user/erondu');
      timeout.then((res)=>{
        documentFrag = document.createDocumentFragment();
        var div = document.createElement('div');
        var image = document.createElement('img');
        image.src = res.url;
        image.classList = [imageClass];
        div.classList = [imgContainerClass];
        div.append(image);
        documentFrag.append(div);
      
        divCount = divCount + addOnScroll;
        if(divCount > 2*addOnScroll){
          for(index=0;index<(divCount - 2*addOnScroll);index++){
            imgContainer[index].classList.add('hidden');
            imgContainer[index].children[0].classList.add('hidden');
            visibilityHidden[index] = true;
          }
        }
        parentScroll.append(documentFrag);
        parentScroll.classList.remove(loaderClass);
        documentFrag = null; 
        timeout = null;
      },(error)=>{
      });
      
  }
  

});