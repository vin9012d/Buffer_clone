import * as data from "./actiontype"
let init = {
    token : "",
    isAuth:false,
    isAuthloading:false

}
export const reducer = (oldstate = init,action)=>{
    
    const {type,payload} = action
    switch (type) {
        case data.USER_LOGIN_REQUEST:
            return {
                ...oldstate,isAuth:false,isAuthloading:true
            };
        case data.USER_LOGIN_SUCCESS:
            return {
                ...oldstate,isAuth:true,isAuthloading:false,token:payload
            };
        case data.USER_LOGIN_FAILURE:
            return {
                ...oldstate,isAuthloading:false,isAuth:false
            };

        case data.USER_LOGOUT_SUCCESS:
            return {
                ...oldstate,isAuthloading:false,isAuth:false,token:""
            }
        default:return oldstate
    }
}