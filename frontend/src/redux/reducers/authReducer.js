const initialState = {
    user: { email: '', urlImage: "", name: "", token: "" },
    errores: '',
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'user':
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("name", action.payload.name)
            localStorage.setItem("urlImage", action.payload.urlImage)
            return {
                ...state,
                user: action.payload
            }
        case 'logOut':
            return {
                ...state,
                user: '',
            }
       
        default:
            return state
    }


};
export default authReducer