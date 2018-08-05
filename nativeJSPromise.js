function promise(){
  var successFnArr = [];
  var errorFnArr = [];
  var interval = null;
  this.resolvedObj = null;
  this.rejectObj = null;
  function isFunc(fn){
    return typeof fn =='function';
  }

  function isPromise(obj){
    return typeof obj =='object' && typeof obj.then == 'function';
  }

  function iterateSuccess(val,successFnArr,index){
    var returnVal,pms,runTimeFn,runTimeArr;
    if(index < successFnArr.length){
      if(isPromise(val)){
        interval = setInterval(function(){
          pms = val.resolvedObj || val.rejectObj;
          if(pms!=null){
            runTimeFn = iterateSuccess;
            runTimeArr = successFnArr;
            returnVal = pms;
            if(!isPromise(pms)){
              if(val.rejectObj !=null){
                runTimeFn = iterateError;
                runTimeArr = errorFnArr;
              }
              if(isFunc(runTimeFn[index])){
                returnVal = runTimeFn[index](pms);
                index++;  
              }
               
            }
            clearInterval(interval);
            return runTimeFn(returnVal,runTimeArr,index);
            
          }else{
            clearInterval(interval);
            return iterateSuccess(val,successFnArr,index);
          }
        },500);
      }else{
        returnVal = successFnArr[index](val);
        return iterateSuccess(returnVal,successFnArr,++index);
      }  
    }
    return;
    
  }
  function iterateError(val,errorFnArr,index){
    var returnVal,pms,runTimeFn,runTimeArr;
    if(index < errorFnArr.length){
      if(isPromise(val)){
        interval = setInterval(function(){
          pms = val.resolvedObj || val.rejectObj;
          if(pms!=null){
            runTimeFn = iterateSuccess;
            runTimeArr = successFnArr;
            returnVal = pms;
            if(!isPromise(pms)){
              if(val.rejectObj !=null){
                runTimeFn = iterateError;
                runTimeArr = errorFnArr;
              }
              if(isFunc(runTimeFn[index])){
                returnVal = runTimeFn[index](pms);
                index++;  
              } 
            }
            clearInterval(interval);
            return runTimeFn(returnVal,runTimeArr,index);
            
          }else{
            clearInterval(interval);
            return iterateError(val,errorFnArr,index);
          }
        },500);
      }else{
        returnVal = errorFnArr[index](val);
        return iterateError(returnVal,errorFnArr,++index);
      }  
    }
    return;
    
  }

  this.then = function(successFn,errorFn){
    if(isFunc(successFn)){
      successFnArr.push(successFn);
    }

    if(isFunc(errorFn)){
      errorFnArr.push(errorFn);
    }
    return this;

  };

  this.resolve = function(resolvedObj){
    iterateSuccess(resolvedObj,successFnArr,0);
    this.resolvedObj = resolvedObj; 

  };

  this.reject = function(rejectObj){
    iterateError(rejectObj,errorFnArr,0);
    this.rejectObj = rejectObj; 

  };  

  return this;
}

var p1 = new promise();
var p2 = new promise();
var p3 = new promise();
var p4 = new promise();

p1.then(function success(res){
  console.log("p1 success : 1",res);
  return res;
},function error(res){
  console.log("p1 error : 1", res);
  return res;
}).then(function success(res){
  console.log("p1 success : 2", res);
},function error(res){
  console.log("p1 error : 2", res);
});

p2.then(function success(res){
  console.log("p2 succes : 1", res);
},function error(res){
  console.log("p2 error : 1", res);
});

p3.then(function success(res){
  console.log("p3 success : 1", res);
},function error(res){
  console.log("p3 error : 1", res);
  return p4;
}).then(function success(res){
  console.log("p3 success : 2", res);
},function error(res){
  console.log("p3 error : 2", res);
});

p4.then(function success(res){
  console.log("p4 success : 1", res);
});

setTimeout(function(){
  p1.resolve(p2);
},2000);

setTimeout(function(){
  p2.resolve(p3);
},3000);

setTimeout(function(){
  p3.reject({data:'p3'});
},3000);

setTimeout(function(){
  p4.resolve({data:"p4"});
},3000);
