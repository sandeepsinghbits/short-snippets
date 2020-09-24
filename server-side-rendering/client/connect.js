import { ReactReduxContext } from 'react-redux'
import React, {Component} from "react";
function connect(mapStateToProps, mapDispatchToProps){
    return function(WrappedComponent){
        class ParentComponent extends Component {
            constructor(props){
                super(props);
                this.state = mapStateToProps(this.props.store.getState());
            }
            componentDidMount(){
                this.unsubscribe = this.props.store.subscribe((value) => {
                    const newState = mapStateToProps(this.props.store.getState());
                    this.setState(newState);
                });
            }
            componentWillUnmount(){
                this.unsubscribe();
            }
            render(){;
                const { store, ...rest} = this.props;
                return <WrappedComponent {...rest} {...this.state} {...mapDispatchToProps(store.dispatch)} />
            }
        }
        return function(props){
            return <div>
                <ReactReduxContext.Consumer>
                {({ store }) => {
                return <ParentComponent store={store} {...props} /> 
                }}
            </ReactReduxContext.Consumer>
         </div>
        }

    }
}

export default connect;