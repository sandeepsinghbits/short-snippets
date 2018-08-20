/*
async actions should always return a function.
This function will be called with dispatch method thus making it able to dispatch actions itself.
The return value of this function will be the return value of the dispatch method 
called as a result of action performed by user or an app.
*/
export function asyncUserSelection(user){

	return function(dispatch){
		var pms = new Promise((res,rej)=>{
			setTimeout(()=>{
				res(user);
			},1000);
		});
		pms.then((payload)=>dispatch({type:'USER_SELECTED',payload:payload}));
		return pms;
	}
};