const initstate = {
    isLoading:false
}

export const reducer = (state = initstate, action) => {
    let { type, payload } = action;
    return state;
}