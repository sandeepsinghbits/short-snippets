/*
This is also a design pattern that focuses on the ability to add functionalities to existing classes dynamically.
The idea was that the decoration itself wasn't essential to the base functionality of the class, otherwise it would be baked into the superclass itself.
*/

//refactor this

function AlienWare() {
 
  this.cost = function () { return 10000; };
  this.screenSize = function () { return 15.6; };
 
}
 
// Decorator 1
function memory( alienware ) {
 
  var c = alienware.cost();
  alienware.cost = function() {
    return c + 7500;
  };
 
}

 
// Decorator 2
function insurance( alienware ){
 
  var c = alienware.cost();
  alienware.cost = function(){
     return c + 2500;
  };
 
}
 
var al = new AlienWare();
memory( al );
engraving( al );
insurance( al );
 
console.log( al.cost() );
 
console.log( al.screenSize());

