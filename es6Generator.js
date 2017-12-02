var p1 = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve({name:"p1"});
	},2000);
})

var p2 = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve({name:"p2"});
	},2000);
})


run(function *(){
	var y1 = yield p1;
	console.log("yield1",y1);
	var y2 = yield p2;
	console.log("val2",y2);
	y2.complete = true;
	return y2;
	
}).then(function(value){
	console.log("run::", value);
});

function run(generator){
	var iterator = generator();
	
	function iterate(iteration){
		if(iteration.done){
			return iteration.value;
		}
		let promise = iteration.value;
		return promise.then(function(data){
			return iterate(iterator.next(data));
		});
	}

	return iterate(iterator.next()); 
	
}

