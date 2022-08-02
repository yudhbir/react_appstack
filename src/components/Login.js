import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AuthService from '../services/AuthService'
// import './Login.css';

function Login({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();        
        const token = await AuthService.loginUser({ username, password });        
        setToken(token);
    }
    const handleChange = (e) => {
        const {name,value} = e.target;
        if(name=='username'){
            setUserName(value);
        }else{ 
            setPassword(value);
        }
    }

  return(
    <div className="auth-content">
        <div className="auth-bg">
            <span className="r"></span>
            <span className="r s"></span>
            <span className="r s"></span>
            <span className="r"></span>
        </div>
        <div className="card">
            <div className="card-body text-center">
                <div className="mb-4">
                    <i className="feather icon-unlock auth-icon"></i>
                </div>
                <h3 className="mb-4">Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" name="username" className="form-control" placeholder="username" onChange={handleChange}/>
                    </div>
                    <div className="input-group mb-4">
                        <input type="password" name="password" className="form-control" placeholder="password" onChange={handleChange}/>
                    </div>
                    <div className="form-group text-left">
                        <div className="checkbox checkbox-fill d-inline">
                            <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                            <label htmlFor="checkbox-fill-a1" className="cr"> Save Details</label>
                        </div>
                    </div>
                    <button className="btn btn-primary shadow-2 mb-4">Login</button>
                </form>
                <p className="mb-2 text-muted">Forgot password? <a href="auth-reset-password.html">Reset</a></p>
                <p className="mb-0 text-muted">Don’t have an account? <a href="auth-signup.html">Signup</a></p>
            </div>
        </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Login;