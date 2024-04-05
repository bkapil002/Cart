const reducer = (state = 0 , action) =>{
    switch(action.type){
        case 'dispatch':
        return state + action.payload;
        case 'sub':
        return state - action.payload;
        default : 
        return state
    }
}

export default reducer