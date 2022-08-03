// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes,Outlet } from 'react-router-dom';
import MasterLayout from './layouts/MasterLayout';
import LoginLayout from './layouts/LoginLayout';

import Authtoken from './context/Authtoken';

import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Products from './components/Products';
import Login from './components/Login';
const PrivateWrapper = (props) => {
    return props.token ? <Outlet /> : <Navigate to="/login" />;
}
const ProtectedWrapper = (props) => {
    return (!props.token) ? <Outlet /> : <Navigate to="/home" />;
}
function App() {
    const {token, setToken} = Authtoken();

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
            <MasterLayout>
                <Routes element={<PrivateWrapper auth={token}/>}>
                    <Route path="*" element={ <Navigate to="/home" /> } />
                    <Route exact path="/home" element={<Dashboard/>}/>
                    <Route exact path="/users" element={<Users/>}/>
                    <Route exact path="/products" element={<Products/>}/>
                </Routes>
            </MasterLayout>            
        </BrowserRouter>
    </>   
  );
}

export default App;
