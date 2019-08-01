const defalutState = {
    count : 0
}

export default (state = defalutState,action) =>{
    if(action.type === 'add_count'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.count++
        return newState
    }
    if(action.type === 'reduce_count'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.count--
        return newState
    }
    return state
}
