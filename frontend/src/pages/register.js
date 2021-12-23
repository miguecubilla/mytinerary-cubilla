import React from 'react';
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';
import { useRef } from 'react';
import GoogleLogin from 'react-google-login';
import Form from 'react-bootstrap/Form'
import { toast } from "react-toastify";

const countries = [
    "Afganistán",
    "Albania",
    "Alemania",
    "Andorra",
    "Angola",
    "Antigua y Barbuda",
    "Arabia Saudita",
    "Argelia",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaiyán",
    "Bahamas",
    "Bangladés",
    "Barbados",
    "Baréin",
    "Bélgica",
    "Belice",
    "Benín",
    "Bielorrusia",
    "Birmania",
    "Bolivia",
    "Bosnia y Herzegovina",
    "Botsuana",
    "Brasil",
    "Brunéi",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Bután",
    "Cabo Verde",
    "Camboya",
    "Camerún",
    "Canadá",
    "Catar",
    "Chad",
    "Chile",
    "China",
    "Chipre",
    "Ciudad del Vaticano",
    "Colombia",
    "Comoras",
    "Corea del Norte",
    "Corea del Sur",
    "Costa de Marfil",
    "Costa Rica",
    "Croacia",
    "Cuba",
    "Dinamarca",
    "Dominica",
    "Ecuador",
    "Egipto",
    "El Salvador",
    "Emiratos Árabes Unidos",
    "Eritrea",
    "Eslovaquia",
    "Eslovenia",
    "España",
    "Estados Unidos",
    "Estonia",
    "Etiopía",
    "Filipinas",
    "Finlandia",
    "Fiyi",
    "Francia",
    "Gabón",
    "Gambia",
    "Georgia",
    "Ghana",
    "Granada",
    "Grecia",
    "Guatemala",
    "Guyana",
    "Guinea",
    "Guinea ecuatorial",
    "Guinea-Bisáu",
    "Haití",
    "Honduras",
    "Hungría",
    "India",
    "Indonesia",
    "Irak",
    "Irán",
    "Irlanda",
    "Islandia",
    "Islas Marshall",
    "Islas Salomón",
    "Israel",
    "Italia",
    "Jamaica",
    "Japón",
    "Jordania",
    "Kazajistán",
    "Kenia",
    "Kirguistán",
    "Kiribati",
    "Kuwait",
    "Laos",
    "Lesoto",
    "Letonia",
    "Líbano",
    "Liberia",
    "Libia",
    "Liechtenstein",
    "Lituania",
    "Luxemburgo",
    "Madagascar",
    "Malasia",
    "Malaui",
    "Maldivas",
    "Malí",
    "Malta",
    "Marruecos",
    "Mauricio",
    "Mauritania",
    "México",
    "Micronesia",
    "Moldavia",
    "Mónaco",
    "Mongolia",
    "Montenegro",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Nicaragua",
    "Níger",
    "Nigeria",
    "Noruega",
    "Nueva Zelanda",
    "Omán",
    "Países Bajos",
    "Pakistán",
    "Palaos",
    "Palestina",
    "Panamá",
    "Papúa Nueva Guinea",
    "Paraguay",
    "Perú",
    "Polonia",
    "Portugal",
    "Reino Unido",
    "República Centroafricana",
    "República Checa",
    "República de Macedonia",
    "República del Congo",
    "República Democrática del Congo",
    "República Dominicana",
    "República Sudafricana",
    "Ruanda",
    "Rumanía",
    "Rusia",
    "Samoa",
    "San Cristóbal y Nieves",
    "San Marino",
    "San Vicente y las Granadinas",
    "Santa Lucía",
    "Santo Tomé y Príncipe",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leona",
    "Singapur",
    "Siria",
    "Somalia",
    "Sri Lanka",
    "Suazilandia",
    "Sudán",
    "Sudán del Sur",
    "Suecia",
    "Suiza",
    "Surinam",
    "Tailandia",
    "Tanzania",
    "Tayikistán",
    "Timor Oriental",
    "Togo",
    "Tonga",
    "Trinidad y Tobago",
    "Túnez",
    "Turkmenistán",
    "Turquía",
    "Tuvalu",
    "Ucrania",
    "Uganda",
    "Uruguay",
    "Uzbekistán",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Yibuti",
    "Zambia",
    "Zimbabue",
];

const Register = (props) => {
    const inputEmail = useRef();
    const inputContraseña = useRef();
    const inputName = useRef();
    const inputLastName = useRef();
    const inputCountry = useRef();
    const inputUrlImage = useRef();

    const handleSubmit = async (user) => {
        const errores = await props.registrarUsuario(user);
        console.log(errores);
        if (errores) {
            errores.errores.map(e => toast.info(e.message, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }))
        };
    }


    const handleSubmitInputs = (e) => {
        e.preventDefault();
        const user = {
            name: inputName.current.value,
            lastName: inputLastName.current.value,
            country: inputCountry.current.value,
            email: inputEmail.current.value,
            password: inputContraseña.current.value,
            urlImage: inputUrlImage.current.value,
        }
        handleSubmit(user)
        inputName.current.value = '';
        inputLastName.current.value = '';
        inputCountry.current.value = '';
        inputEmail.current.value = '';
        inputContraseña.current.value = '';
        inputUrlImage.current.value = '';



    };
    const responseGoogle = (res) => {
        
        let googleUser = {
            name: res.profileObj.givenName,
            lastName: res.profileObj.familyName,
            country: "Argentina",
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            urlImage: res.profileObj.imageUrl,
            google: true,
        };
        props
            .registrarUsuario(googleUser)
            .then((response) => response.data.success)
            .catch((error) => console.log(error));
    };

    return (
        <div className='mainform'>

            <div className="containerform">

                <main className="main-formulario">
                    <Form onSubmit={handleSubmitInputs} className='FormSign'>
                        <h1 className='headerform'> Please, SignUp!!!</h1>
                        <label className='labelFormulario' style={{ display: 'flex', flexDirection: 'column' }}>Name
                            <input type="text" ref={inputName} placeholder='put your name' />
                        </label>
                        <label className='labelFormulario' style={{ display: 'flex', flexDirection: 'column' }}>LastName
                            <input type="text" ref={inputLastName} placeholder='put your last name' />
                        </label>
                        <label className='labelFormulario' style={{ display: 'flex', flexDirection: 'column' }}>Url Image
                            <input type="text" ref={inputUrlImage} placeholder='enter your photo url' />
                        </label>
                        <label className='labelFormulario' style={{ display: 'flex', flexDirection: 'column' }}>Country
                            <select ref={inputCountry} name="select">
                                {countries.map((country) => {
                                    return (
                                        <option value={country}>{country}</option>
                                    )
                                })}
                            </select>
                        </label>

                        <label className='labelFormulario' style={{ display: 'flex', flexDirection: 'column' }}>Mail
                            <input className='email' type="email" ref={inputEmail} name="name" />
                        </label>
                        <label className='labelFormulario' style={{ display: 'flex', flexDirection: 'column' }}>Password
                            <input className='email' type="password" ref={inputContraseña} name="name" />
                        </label>
                        <span className="labelFormulario">
                            You already have an account? Sign in <a href="/singin">here</a>
                        </span>
                        <input type="submit" value="Register" className='submit' />
                        <div>

                            <GoogleLogin
                                className='submit'
                                clientId="186523352742-3mhc4fnbnq68q1s8ph68sj1mrp1psd0e.apps.googleusercontent.com"
                                buttonText="SignUp with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={"single_host_origin"}
                            />
                        </div>
                    </Form>

                </main>

            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        usuario: state.authReducer.user,
        errores: state.authReducer.errores
    };
};
const mapDispatchToProps = {
    registrarUsuario: authActions.userRegister
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);