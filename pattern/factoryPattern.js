//The factory pattern allows to create a certain type of objects without explicitly require us to use a constructor.
//Instead a Factory will provide a generic interface for creating objects,wherein we specify the type of objects we wish
//to create.

function Circle(options){
  this.radius = options.radius || 2; //default value
  this.getArea = function(){
    return Math.PI * Math.pow(this.radius,2);
  }
}

function Rectangle(options){
  this.length = options.length;
  this.width = options.width;
  this.getArea = function(){
    return this.length * this.width;
  }
}

//ShapeFactory to get the required shape
function shapeFactory(){
}

shapeFactory.prototype.type = Circle; // defaults to Circle
shapeFactory.prototype.createShape = function(options){
    switch(options.type){
      case 'circle':
        this.type = Circle;
        break;
      case 'rectangle':
        this.type = Rectangle;
        break;
    }
    return new this.type(options);
}

var myFactory = new shapeFactory();
var circle = myFactory.createShape({type:'circle',radius:2});
console.log(circle.getArea());
var reactangle = myFactory.createShape({type:'rectangle',length:10,width:5});
console.log(reactangle.getArea());
