import React, { useState, useContext } from 'react';
import './Loginsingup.css'; // Import your CSS file
import { ShopContext } from '../../Context/ShopContext';
import axios from "axios";

const LoginSingup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(ShopContext);
  const [isRegistering, setIsRegistering] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (isRegistering) {
      newUrl += "/api/user/register";
    } else {
      newUrl += "/api/user/login";
    }

    try {
      const response = await axios.post(newUrl, data);
      console.log('Received response:', response.data);  // Debugging line

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error occurred:', error);  // Debugging line
      alert("An error occurred. Please try again.");
    }
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className='absolute h-full w-full bg-[#000000d1] z-[10001] flex justify-center items-center'>
      <div className={`form-box p-7 rounded-3xl ${isRegistering ? 'register' : 'login'}`}>
        <h2>{isRegistering ? 'Registration' : 'Login'}</h2>
        <form onSubmit={onLogin} id={isRegistering ? 'form-registration' : 'form-fild'} name={isRegistering ? 'registration-form' : 'login-form'}>
          {isRegistering && (
            <div className="input-box">
              <span className="icon"><ion-icon name="person"></ion-icon></span>
              <input 
                onChange={onChangeHandler} 
                value={data.name} 
                type="text" 
                id="name" 
                name="name" 
                autoComplete="name" 
                required 
              />
              <label htmlFor="name">Name</label>
            </div>
          )}
          <div className="input-box">
            <span className="icon"><ion-icon name="mail"></ion-icon></span>
            <input 
              onChange={onChangeHandler} 
              value={data.email} 
              type="email" 
              id="email" 
              name="email" 
              autoComplete="email" 
              required 
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-box">
            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
            <input 
              onChange={onChangeHandler} 
              value={data.password} 
              type="password" 
              id="password" 
              name="password" 
              autoComplete={isRegistering ? 'new-password' : 'current-password'} 
              required 
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="remember-forget">
            <label className='flex items-center' htmlFor="checkbox">
              <input type="checkbox" id="checkbox" name="checkbox" />
              {isRegistering ? 'I agree to the terms & conditions' : 'Remember me'}
            </label>
            {!isRegistering && <a href="#">Forget Password?</a>}
          </div>
          <button type="submit" className="btn">{isRegistering ? 'Register' : 'Login'}</button>
          <div className="login-register">
            <p>
              {isRegistering ? "Already have an account?" : "Don't have an account?"}
              <a href="#" onClick={toggleForm} className={isRegistering ? 'login-link' : 'register-link'}>
                {isRegistering ? 'Login' : 'Register'}
              </a>
            </p>
          </div>
        </form>
        {/* Assuming there's an icon to close the popup */}
        <span className="icon-close" onClick={() => setShowLogin(false)}>X</span>
      </div>
      {/* Assuming there's a button to trigger the login popup somewhere */}
      <button className="btnLogin-popup">Login</button>
    </div>
  );
};

export default LoginSingup;
