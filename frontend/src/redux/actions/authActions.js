const axios = require('axios')
const Swal = require('sweetalert2')


const authActions = {

    userRegister: (User) => {
        return async (dispatch, getState) => {
            try {

                const user = await axios.post('http://localhost:4000/api/auth/signUp', { ...User });
                if (user.data.success && !user.data.error) {
                    localStorage.setItem("token", user.data.response.token);
                    dispatch({ type: 'user', payload: user.data.response })
                } else {
                    console.error(user.data.response)
                    return { errores: user.data.errores };
                }
            } catch (error) { }
        };
    },
    singIn: (userLogin) => {
        return async (dispatch, getState) => {
            try {

                const user = await axios.post('http://localhost:4000/api/auth/signIn', { ...userLogin })
                if (user.data.success && !user.data.error) {
                    localStorage.setItem("token", user.data.response.token);
                    dispatch({ type: 'user', payload: { pepe: user.data.response } })
                } else {
                    // alert(user.data.error)
                    console.error(user.data.response)
                    return { errores: user.data.errores };
                }
            } catch (error) {
                console.error(error)
            }
        }
    },
    logOut: () => {
        return (dispatch, getState) => {
            Swal.fire({
                title: 'you have successfully unlogged! ',
                text: 'see you soon!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            localStorage.removeItem('token')
            dispatch({ type: 'logOut', payload: {} })
        }
    },
    logInLS: (token) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.get("http://localhost:4000/api/tokenVerification", {
                headers: {
                    Authorization: "Bearer "+ token
                },
                 })
                dispatch({type: "user", payload: {token, name: response.data.name, urlImage: response.data.urlImage, _id: response.data._id}})
         } catch (error) {
            
        } 
    }
},
};

module.exports = authActions