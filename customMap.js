function customMap(fn){
	var arr = this;
	if(!Array.isArray(arr)){
		throw new Error("customMap works only on array");
	}
	if (typeof fn !== 'function') {
		throw new Error( fn + ' is not a function');
	}
	var index;
	var result = [];
	var length = arr.length;
	for(index=0;index <length;index++){
		result.push(fn(arr[index]));
	}
	return result;
}

Array.prototype.customMap = customMap;

var array = [1,2,3];

var mArr = array.customMap(function(item){
	return item*2;
});
console.log("original array",array);
console.log("modified array",mArr);