function debounce(func,wait){
  var timeout;
  return function(){
    var args = arguments;
    if(typeof timeout != 'undefined'){
      clearTimeout(timeout);
    }
    timeout =  setTimeout(function(){
      func.apply(null,args);
    },wait);

  }

}

//Sample usage
var _debounce = debounce(function(){
    console.log("arguments",arguments);
  },500);

for(var i = 0;i<10;i++){
  _debounce(i);
}
