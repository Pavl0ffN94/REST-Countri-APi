import { SET_LOADING, SET_ERROR, SET_COUNTRIES } from './countries-action';


const initialState = {
    status: 'idle',
    error: null,
    list: [],
}

export const countriesReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case SET_LOADING: {
            return {
                ...state,
                status: 'loading',
                error: null
            }
        }
         case SET_ERROR: {
            return{
                ...state,
                status: 'rejected',
                error: payload
            }
        } case SET_COUNTRIES: {
            return{
                ...state,
                status: 'received',
                list:payload
            }
        }
        default:
            return state;
    }
}