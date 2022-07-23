

const Itemreducer = (state=[], action) => {
    if(action.type == 'additem'){
        return [...state, action.payload]
    }
    else{
        return state
    }
}

export default Itemreducer;
