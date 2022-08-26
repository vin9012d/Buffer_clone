import { ADD_CHANNELS_FAILURE, ADD_CHANNELS_REQUEST, ADD_CHANNELS_SUCCESS, GET_CHANNELS_FAILURE, GET_CHANNELS_REQUEST, GET_CHANNELS_SUCCESS, GET_FACEBOOKDATA_FAILURE, GET_FACEBOOKDATA_SUCCESS, GET_INSTAGRAMDATA_REQUEST } from "./actiontype"

const getChannels = () => {
    dispatch({ type: GET_CHANNELS_REQUEST });
    
    return axios.get('http://localhost:8080/channels')
        .then((res) => {
        dispatch({type:GET_CHANNELS_SUCCESS,payload:res.data})
        })
        .catch((e) => {
        dispatch({type:GET_CHANNELS_FAILURE})
    })
}

const addChannels = () => {
     
    dispatch({ type: ADD_CHANNELS_REQUEST });
    
    return axios.post("http://localhost:8080/channels", payload)
        .then((res) => {
        dispatch({type:ADD_CHANNELS_SUCCESS})
        })
        .catch((e) => {
            dispatch({type:ADD_CHANNELS_FAILURE})
    })
        
    }

const getFacebookDAta = () => () => {
    disptach({ type: GET_FACEBOOKDATA_REQUEST })
    
    return axios.get("http://localhost:8080/facebookData")
        .then((res) => {
        dispatch({type:GET_FACEBOOKDATA_SUCCESS,payload:res.data})
        })
        .catch((e) => {
        dispatch({type:GET_FACEBOOKDATA_FAILURE})
    })

    }


const getInstagramData = () => () => {
    dispatch({ type: GET_INSTAGRAMDATA_REQUEST })
    

    return axios.get(" http://localhost:8080/facebookData")
        .then((res) => {
        dispatch({type:GET_CHANNELS_SUCCESS,payload:res.data})
        }).catch((e) => {
        dispatch({type:GET_FACEBOOKDATA_FAILURE})
    })

    }


