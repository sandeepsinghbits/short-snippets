var immutable = (function immutable(){
	var instance = null;

	var setter = {
		set :function(property,value){
			var obj = Object.assign({},this);
			Object.assign(obj,{[property]:value});
			return obj;
		}
	};
	function createImmutable(){
		this.createImmutable = function(obj){
			var _immutableObj = Object.create(setter);
			Object.assign(_immutableObj,obj||{});
			return _immutableObj;
		};

	}
	return {
		getInstance:function(){
			if(instance === null){
				instance = new createImmutable();
			}
			return instance;
		}
	}
})();

//sample usage
var immutableCreator = immutable.getInstance();
var obj = immutableCreator.createImmutable({'foo':{name:{f:"sandeep"},age:{y:27,m:1}}});

var updateObj = immutableCreator.createImmutable(obj.foo);
updateObj = updateObj.set('name',{f:"akhil"});
var newObj = obj.set('foo',updateObj);

console.log(updateObj.name ===obj.foo.name);
console.log(obj === newObj);
console.log(obj.foo === newObj.foo);
console.log(obj.foo.name === newObj.foo.name);
console.log(obj.foo.age === newObj.foo.age);

