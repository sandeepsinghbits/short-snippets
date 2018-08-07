
function customBind(context){
	var func = this;
	if(context ==null){
		context = window;
	}else if(typeof context !='object'){
		context = Object(context);
	}
	var args = Array.prototype.slice.customApply(arguments,[1,arguments.length]);

	return function(){
		var currentArgs = Array.prototype.slice.customApply(arguments,[0,arguments.length]); 
		return func.customApply(context,args.concat(currentArgs));
	}

}

function customApply(context,argArr){
	var func = this;
	if(context ==null){
		context = window;
	}else if(typeof context !='object'){
		context = Object(context);
	}
	var funcSym = Symbol("funcSym");
	context[funcSym] = func;
	var args = [];
	for(var index = 0;index<argArr.length;index++){
		args.push("argArr["+index+"]");
	}
	var result = eval("context[funcSym]("+args+")");
	delete context['funcSym'];
	return result;

}

Function.prototype.customBind = customBind;
Function.prototype.customApply = customApply;

function name(a,b,c){
	for(var key in this){
		console.log(key,this[key]);
	}
	console.log(a,b,c);
	console.log(arguments);
}


var obj = {"name":"sandeep"};


var fn = name.customBind(obj,"a","b");
fn("c");