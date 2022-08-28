import { GET_CHANNELS_FAILURE, GET_CHANNELS_REQUEST, GET_CHANNELS_SUCCESS, GET_FACEBOOKDATA_FAILURE, GET_FACEBOOKDATA_REQUEST, GET_FACEBOOKDATA_SUCCESS } from "./actiontype";

const initstate = {
    isLoading: false,
    ids: [],
    data: [],
    isError: false
}

export const reducer = (state = initstate, action) => {
    let { type, payload } = action;

    switch (type) {
        case GET_CHANNELS_REQUEST:
            return {...state, isLoading:true,isError:false}

        case GET_CHANNELS_SUCCESS:
            return { ...state, isLoading: false, isError: false, ids: payload }
        
        case GET_CHANNELS_FAILURE:
            return { ...state, isError: true, isLoading: false }
        
        case GET_FACEBOOKDATA_REQUEST:
            return { ...state, isLoading: true, isError: false }
        
        case GET_FACEBOOKDATA_SUCCESS:
            return { ...state, isLoading: false, isError: false, data: payload }
        
        case GET_FACEBOOKDATA_FAILURE:
            return { ...state, isLoading: false, isError: true }
        
        default:
            return state;
    }
  
}