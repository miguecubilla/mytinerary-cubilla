const initialState = {
    user: { email: '', urlImg: "", name: "", token: "" },
    errores: '',
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'user':
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("name", action.payload.name)
            localStorage.setItem("img", action.payload.urlImage)
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