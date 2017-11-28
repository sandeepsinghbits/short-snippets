
var $q = (function (){

  function promise(){
    var success=[],failure=[];
    this.promise = {
      then:function(successFn,failureFn){
        success.push(successFn);
        failure.push(failureFn);
        return this;
      }
    };
    this.resolve = function(obj){
      var val = obj;
      success.forEach(function(fun){
        val = fun(val);
      });
    };
    this.reject = function(obj){
      var val = obj;
      failure.forEach(function(fun){
        val = fun(val);
      });
    }
  }

  return {
    defer:function(){
      return new promise();
    }
  }
  
})();

//Sample Example showing its usage
var p1 = $q.defer();

p1.promise.then(function success(obj){
  return obj.name;
}).then(function success(name){
  return {name:name,age:25};
}).then(function success(obj){
  console.log(obj);
  return obj;
});

setTimeout(function(){
  p1.resolve({name:"sandeep"});
},2000);
