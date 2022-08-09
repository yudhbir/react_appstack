// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes,Outlet } from 'react-router-dom';
import MasterLayout from './layouts/MasterLayout';
import LoginLayout from './layouts/LoginLayout';

import Authtoken from './context/Authtoken';

import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Products from './components/Products';
import Charts from './components/Charts';
import Login from './components/Login';
import CartContext from './context/CartContext';
const PrivateWrapper = (props) => {
    return props.token ? <Outlet /> : <Navigate to="/login" />;
}
const ProtectedWrapper = (props) => {
    return (!props.token) ? <Outlet /> : <Navigate to="/home" />;
}

function App() {
    const {token, setToken} = Authtoken();
    const [navcart, setNavcart] = useState([]);

  if(!token) {
    return (
        <BrowserRouter> 
            <LoginLayout>
                <Routes element={<ProtectedWrapper auth={token}/>}>
                    <Route path="*" element={ <Navigate to="/login" /> } />
                    <Route exact path="/login" element={<Login setToken={setToken} />}/>
                </Routes>
            </LoginLayout>
        </BrowserRouter>
    )
  }
  return (
    <>
        <BrowserRouter>
            <CartContext.Provider value={[navcart, setNavcart]}>            
                <MasterLayout>
                    <Routes element={<PrivateWrapper auth={token}/>}>
                        <Route path="*" element={ <Navigate to="/home" /> } />
                        <Route exact path="/home" element={<Dashboard/>}/>
                        <Route exact path="/users" element={<Users/>}/>
                        <Route exact path="/products" element={<Products/>}/>
                        <Route exact path="/charts" element={<Charts/>}/>
                    </Routes>
                </MasterLayout>  
            </CartContext.Provider>          
        </BrowserRouter>
    </>   
  );
}

export default App;
