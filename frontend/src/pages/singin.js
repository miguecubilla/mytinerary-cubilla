import React from 'react'
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions'
import { useRef } from 'react'
import GoogleLogin from "react-google-login";
const Swal = require('sweetalert2')



const SignIn = (props) => {
    const inputEmail = useRef();
    const inputContraseña = useRef();

    const handleSubmit = async (user) => {
        const errores = await props.loguearUsuario(user);
        
        if (errores) {
            Swal.fire({
                icon: 'error',
                title: 'Try again please...',
                text: 'Some data are incorrect!',
              })
        };
    };

    const handleSubmitInputs = (e) => {
        e.preventDefault();
        const user = {
            email: inputEmail.current.value,
            password: inputContraseña.current.value,
        }
        handleSubmit(user)
        inputEmail.current.value = '';
        inputContraseña.current.value = '';



    };
    const responseGoogle = (res) => {
        console.log(res);
        let googleUser = {
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            google: true,
        };
        props.loguearUsuario(googleUser)

    };

    return (
        <div className='mainform'>

            <div className="containerform">

                <main className="main-formulario">
                    <form onSubmit={handleSubmitInputs} className='FormSign'>
                        <h1 className='headerform'>Login</h1>
                        <label className='labelFormulario' style={{ display: 'flex', flexDirection: 'column' }}>
                            <input
                                className="email"
                                type="email"
                                placeholder="Email"
                                ref={inputEmail}
                                name="name"
                            />
                        </label>
                        <label className='labelFormulario' style={{ display: 'flex', flexDirection: 'column' }}>Password
                            <input className='email' type="password" ref={inputContraseña} name="name" />
                        </label>
                        <span className="form-input-login">
                            You don't have an account? Sign up <a href="/register">here</a>
                        </span>
                        <input type="submit" value="Log In" className='submit' />
                        <GoogleLogin
                            className='submit'
                            clientId="186523352742-3mhc4fnbnq68q1s8ph68sj1mrp1psd0e.apps.googleusercontent.com"
                            buttonText="Sign In with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={"single_host_origin"}
                        />
                    </form>

                </main>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        usuario: state.authReducer.user,
        errores: state.authReducer.errores
    };
};
const mapDispatchToProps = {
    loguearUsuario: authActions.singIn
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)