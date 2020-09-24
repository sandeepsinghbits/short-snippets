import React, { Component } from 'react';
//   import { connect } from 'react-redux';
import {fetchAvengerDetail} from './state/sideEffects';
import connect from '../../connect.js';

class Detail extends Component{
    static fetchInitialData({dispatch, path}){
        const id = path.split("/")[2];
        return [dispatch(fetchAvengerDetail(id))];
    }
    componentDidMount(){
        const { match: { params: { id } } } = this.props;
        this.props.fetchAvengerDetail(id);
    }
    render(){
        const { avenger: {name, powers} } = this.props;
        return (
            <div>
                <a href={"/"}>home</a>/{name}
                <h3>{name}</h3>
                <h3>Powers:</h3>
                <ul>
                    {
                        powers.map((power) => {
                            return (
                                <li key={power}>{power}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        avenger: state.detail.avenger
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchAvengerDetail: (id) => {
            return dispatch(fetchAvengerDetail(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);