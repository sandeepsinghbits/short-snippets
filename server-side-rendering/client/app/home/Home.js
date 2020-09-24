import React, { Component } from 'react';
//   import { connect } from 'react-redux';
import {fetchAvengers} from './state/sideEffects';
import connect from '../../connect.js';
class Home extends Component{
    static fetchInitialData({dispatch}){
        return [dispatch(fetchAvengers())];
    }
    componentDidMount(){
        this.props.fetchAvengers();
    }
    render(){
        const { avengers } = this.props;
        return (
            <ul>
                {
                    avengers.map((avenger) => {
                        return (
                            <li key={avenger.id}><a href={`/detail/${avenger.id}`}>{avenger.name}</a></li>
                        )
                    })
                }
            </ul>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return {
        avengers: state.home.avengers
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchAvengers: () => {
            return dispatch(fetchAvengers());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);