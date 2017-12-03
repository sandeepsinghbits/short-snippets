var $q = (function (){

  function promise(){
    var success=[];
    var failure=[];
    this.resolvedValue =null;
    var interval = null;
    function execFunction(iterationArray,resolvedObj){
      var val = resolvedObj,i=0;
      function iterate(iteration){
        val = iteration(val);
        if(val && val.then){
          interval = setInterval(function(){
             if(val.resolvedValue !==null){
              val = val.resolvedValue;
              if(i<iterationArray.length){
                clearInterval(interval);
                interval = null;
                i++;
                iterate(iterationArray[i]);
              }
              
             }
          },0);
        }else if(interval ==null){
          i++;
          if(i<iterationArray.length){
            iterate(iterationArray[i]);
          }
        }
        return;
      }
      iterate(iterationArray[i]);
    }
    this.then = function(successFn,failureFn){
        success.push(successFn);
        failure.push(failureFn);
        return this;
      }
    this.resolve = function(obj){
      this.resolvedValue = obj;
      if(success.length > 0){
        execFunction(success,obj);
      }

    };
    this.reject = function(obj){
      this.resolvedValue = obj;
      if(failure.length > 0){
        execFunction(failure,obj);
      }
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
  console.log("resolved",obj);
});

setTimeout(function(){
  p1.resolve({name:"p1"});
  p2.resolve({name:"p2"});
},2000);
