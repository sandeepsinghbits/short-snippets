Function.prototype.curry = function(){
	var _this = this;
	var slice = Array.prototype.slice;
	var totalArgs = _this.length;
	function curriedVersion(...passedArgsArray){
		if( passedArgsArray.length >= totalArgs){
			return _this(...passedArgsArray);
		}else{
			return function(...currArgs){
				var combinedArgs = [...passedArgsArray,...currArgs];
				return curriedVersion(...combinedArgs);

			}
		}
	}

	return curriedVersion;
}




var abc = function(a, b, c) { return [a, b, c];};
var curried = abc.curry();
console.log(curried(1)(2)(3)); // => [1, 2, 3]
console.log(curried(1, 2)(3)); // => [1, 2, 3]
console.log(curried(1, 2, 3)); // => [1, 2, 3]
