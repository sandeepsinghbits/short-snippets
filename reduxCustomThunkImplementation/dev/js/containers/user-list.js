import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {asyncUserSelection} from '../actions';
import List from '../components/List';

class UserList extends Component {

    constructor(props){
        super(props);
        this.asyncUserSelection = this.asyncUserSelection.bind(this);
    }

    asyncUserSelection(user){
        this.props.asyncUserSelection(user);

    }

    render() {
        return (
            <ul>
                {
                    this.props.users.map((user,index)=>{
                        return <List key={index} user={user} asyncUserSelection={this.asyncUserSelection}/>
                    })
                }
            </ul>
        );
    }

}


function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function bindActiontoProps(dispatch){
    return{
        asyncUserSelection:(user)=>{
            dispatch(asyncUserSelection(user));
        }

    }
}

export default connect(mapStateToProps,bindActiontoProps)(UserList);
