
function customReduce(fn,initialVal){
	if(!Array.isArray(this)){
		throw new Error("customReduce works only on array");
	}
	if (typeof fn !== 'function') {
		throw new Error( fn + ' is not a function');
	}
	var length = this.length;
	var initValUndefined = typeof initialVal =='undefined';
	if(length == 0 && initValUndefined){
		throw new Error("reduce can't operate on empty array in absence of initial value");
	}
	
	var index = initValUndefined && 1 || 0;
	var accumulator = initValUndefined && this[0] || initialVal;
	
	for(;index<length;index++){
		accumulator = fn(accumulator,this[index]);
	}
	return accumulator;

}

Array.prototype.customReduce = customReduce;


