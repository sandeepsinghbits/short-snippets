/*Mixin 
In object-oriented programming languages, a Mixin is a class that contains methods for use by other 
classes without having to be the parent class of those other classes. How those other classes gain 
access to the mixin's methods depends on the language. Mixins are sometimes described as being "included" 
rather than "inherited". Mixins encourage code reuse and can be used to avoid the inheritance ambiguity 
that multiple inheritance can cause (the "diamond problem")
 ~ Source~ Wiki
*/

//refactor this to some new examples
var myMixins = {
  moveForward: function(){
    console.log( "moveForward" );
  },
 
  moveBackward: function(){
    console.log( "moveBackward" );
  },
 
  stop: function(){
    console.log( "stop" );
  }
 
};

function car(color,speed){
	this.color = color;
	this.speed = speed;
}
car.prototype.wipe = function(){
	console.log("wipper is on now");
};

function person(name,age){
	this.name = name;
	this.age = age;
}

person.prototype.shout = function(){
	consol.log("shouting...");
};



Object.assign(car.prototype,myMixins);
Object.assign(person.prototype,myMixins);


var carInstance =  new car("blue",'257 Km/hr');
carInstance.moveForward();

var personInstance = new person("sandeep",27);
personInstance.moveBackward();

