
const INITIAL_STATE = {
    donorlist: {}

}



export default (state = INITIAL_STATE, action)=> {
    switch (action.type){
        case 'SETDATA':
            return({
                ...state,
                appName: action.data
            })
            case 'GETDONORLIST':
            return({
                ...state,
                donorlist: action.payload
            })
    }
    return state;
}