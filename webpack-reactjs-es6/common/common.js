import React from "react";
class App extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		console.log("common");
		return(
			<div>
			{this.props.name}
			</div>
		)
	}
}
export default App;
