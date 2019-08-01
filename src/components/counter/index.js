import React, { Component } from 'react';
import {connect} from 'react-redux'
import './counter.css'
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let {reduceCount,count,addCount}=this.props
        return (
            <div className='wrap'>
                <button onClick={reduceCount}>-</button>
                <h3>{count}</h3>
                <button onClick={addCount}>+</button>
            </div>
        );
    }

    
}
/**state 映射为 props */
const stateToProps = (state)=>{
    return {
        count : state.count
    }
}
/**修改store数据 */
const dispatchToProps = (dispatch) =>{
    return {
        addCount(){
            let action = {
                type:'add_count'
            }
            dispatch(action)
        },
        reduceCount(){
            let action = {
                type:'reduce_count'
            }
            dispatch(action)
        }
    }
}


export default connect(stateToProps,dispatchToProps)(Counter);
