import React, {Component} from 'react';

class List extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.asyncUserSelection(this.props.user);
    }
    render(){
        var user = this.props.user;
        return(
            <li className="pointer" onClick={this.handleClick}>{user.first} {user.last}</li>
        )
    }
}

export default List;