// Dependency Injection implementation in vanillaJS

function Injector(){
   this.dependencies = {};
   
}

Injector.prototype = {
   setDependency : function(dependencyName, dependencyValue){
      this.dependencies[dependencyName] = dependencyValue; 
   },
   createObj : function(func){
      var obj = new func();
      var dependencies = this.getDependencies(func);
      func.apply(obj, dependencies);
      return obj;
   },
   getDependencies : function(func) {
      var args = this.getArguments(func);
      var dependencies = [];
      for ( var i = 0; i < args.length; i++) {
         dependencies.push(this.dependencies[args[i]]);
      }
      return dependencies;
   },
   getArguments : function(func) {
      var fn_parameters = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
      var args = func.toString().match(fn_parameters)[1].split(',');
      return args;
   }
}

//Sample Usage
var instanceInjector = new Injector();


instanceInjector.setDependency('stock',123);

var stockObj = instanceInjector.createObj(function(stock){
   this.stock = stock;
   this.getStock = function(){
      return this.stock;
   }
});

console.log(stockObj);
