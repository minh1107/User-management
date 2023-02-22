import { actionType } from "../action/actionType";

const initState = {
    getHome: 'home',
    infoAdmin: {},
    flagInfo: false,
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_INFO_ADMIN:
            return {
                ...state, 
                infoAdmin: action.info
            } 
        case actionType.FLAG_INFO:
            return {
                ...state, 
                flagInfo: action.flag
            }           
        default:
            return state
    }
}

export default appReducer