var $q = (function (){

  function promise(){
    var success=[];
    var failure=[];
    this.resolvedValue =null;
    var interval = null;
    this.then = function(successFn,failureFn){
        success.push(successFn);
        failure.push(failureFn);
        return this;
      }
    this.resolve = function(obj){
      this.resolvedValue = obj;
      var val = obj,i=0;
      function iterate(iteration){
        val = iteration(val);
        if(val && val.then){
          interval = setInterval(function(){
             if(val.resolvedValue !==null){
              val = val.resolvedValue;
              if(i<success.length){
                clearInterval(interval);
                interval = null;
                i++;
                iterate(success[i]);
              }
              
             }
          },0);
        }else if(interval ==null){
          i++;
          if(i<success.length){
            iterate(success[i]);
          }
        }
        return;
      }
      if(success.length > 0){
        iterate(success[i]);
      }

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
var p2 = $q.defer();
p1.then(function success(obj){
  return p2;
}).then(function success(obj){
  console.log(obj);
});

setTimeout(function(){
  p1.resolve({name:"p1"});
  p2.resolve({name:"p2"});
},2000);
