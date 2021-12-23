import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Cities from './pages/cities.js';
import City from './components/City';
import Home from './pages/home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/register'
import SingIn from './pages/singin'
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from 'react';
import authActions from './redux/actions/authActions.js';


const App = (props) => {
  useEffect(() => {
    if (localStorage.getItem("token")){
      props.logInLS(localStorage.getItem("token"))
    }
  }, []) 
  
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/City/:id" element={<City />} />
        {props.token ? (<Route path="*" element={<Home />} />) : (<><Route path="/register" element={<Register />} /> <Route path="/singin" element={<SingIn />} /> </>)}
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token
  };
};


const mapDispatchToProps = {
  logInLS: authActions.logInLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)