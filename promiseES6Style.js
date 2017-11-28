function promise(fn){
   var success=[],failure=[];
   this.then = function(successFn,errorFn){
      success.push(successFn);
      failure.push(errorFn);
      return this;
   };
   function resolve(data){
      var val = data;
      success.forEach(function(fun){
         val = fun(val);
      });
   }

   function reject(data){
      var val = data;
      failure.forEach(function(fun){
         val = fun(val);
      });
   }
   fn(resolve,reject);
}

//Sample Usage
var p1 = new promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve({'name':'sandeep'});
   },2000);
})

p1.then(function success(data){
   console.log("success",data);
   return data
}).then(function(data){
   data.age = 26;
   return data;
}).then(function(data){
   data.company = 'paytm';
   console.log(data);
})
