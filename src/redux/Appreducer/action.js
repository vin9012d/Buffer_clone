import { ADD_CHANNELS_FAILURE, ADD_CHANNELS_REQUEST, ADD_CHANNELS_SUCCESS, DELETE_CHANNELS_FAILURE, DELETE_CHANNELS_REQUEST, DELETE_CHANNELS_SUCCESS, GET_CHANNELS_FAILURE, GET_CHANNELS_REQUEST, GET_CHANNELS_SUCCESS, GET_FACEBOOKDATA_FAILURE, GET_FACEBOOKDATA_REQUEST, GET_FACEBOOKDATA_SUCCESS, GET_INSTAGRAMDATA_FAILURE, GET_INSTAGRAMDATA_REQUEST, GET_INSTAGRAMDATA_SUCCESS } from "./actiontype"

import axios from 'axios'

const getChannels = () =>(dispatch)=> {
    dispatch({ type: GET_CHANNELS_REQUEST });
    
    return axios.get('https://bufferclone.herokuapp.com/channels')
        .then((res) => {
        dispatch({type:GET_CHANNELS_SUCCESS,payload:res.data})
        })
        .catch((e) => {
        dispatch({type:GET_CHANNELS_FAILURE})
    })
}

const addChannels = (payload) => (dispatch)=>{
     
    dispatch({ type: ADD_CHANNELS_REQUEST });
    
    return axios.post("https://bufferclone.herokuapp.com/channels", payload)
        .then((res) => {
       return dispatch({type:ADD_CHANNELS_SUCCESS})
        })
        .catch((e) => {
            dispatch({type:ADD_CHANNELS_FAILURE})
    })
        
    }

const deleteChannels = (id) => (dispatch) => {
    dispatch({ type: DELETE_CHANNELS_REQUEST })
   return  axios.delete(`https://bufferclone.herokuapp.com/channels/${id}`)
        .then((res) => {
     return    dispatch({type:DELETE_CHANNELS_SUCCESS})
        })
        .catch((e) => {
      return   dispatch({type:DELETE_CHANNELS_FAILURE})
    })
    }

const getFacebookData = () => (dispatch) => {
    dispatch({ type: GET_FACEBOOKDATA_REQUEST })
    
    return axios.get("https://bufferclone.herokuapp.com/facebookData")
        .then((res) => {
        dispatch({type:GET_FACEBOOKDATA_SUCCESS,payload:res.data})
        })
        .catch((e) => {
        dispatch({type:GET_FACEBOOKDATA_FAILURE})
    })

    }


const getInstagramData = () => (dispatch) => {
    dispatch({ type: GET_INSTAGRAMDATA_REQUEST })
    

    return axios.get(" https://bufferclone.herokuapp.com/instagramData")
        .then((res) => {
        dispatch({type:GET_INSTAGRAMDATA_SUCCESS,payload:res.data})
        }).catch((e) => {
        dispatch({type:GET_INSTAGRAMDATA_FAILURE})
    })

    }

    export {getChannels,addChannels,deleteChannels, getFacebookData,getInstagramData}


