export default(state=null, action)=>{
    switch(action.type){
        case "USER_DETAILS_SAGA":
            return action.payload
        default:return state
    }
}