export default function (store){
	return function(dispatch){
		return function(action){
			var result;
			if(typeof action ==='function'){
				result = action(dispatch);
			}else{
				result = dispatch(action);
			}
			return result;
		}
	}
}