const initialState = {
    token: null, name: null, urlImage: null, _id: null,
    errores: '',
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'user':
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("name", action.payload.name)
            localStorage.setItem("urlImage", action.payload.urlImage)
            localStorage.setItem("_id", action.payload._id)

            return {
                token: action.payload.token,
                name: action.payload.name,
                urlImage: action.payload.urlImage,
                _id: action.payload._id
            }
        case 'logOut':
            return {
                ...state,
                token:null,
                name:null,
                urlImage:null,
                _id:null,
            }

        default:
            return state
    }


};
export default authReducer