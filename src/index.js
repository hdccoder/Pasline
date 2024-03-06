import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Link, HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Header from './Components/Header';
import api from './api';

const App = ()=> {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

 
  const logout = () => {
    api.logout(setAuth);
    navigate("/");
   }; 

  const attemptLoginWithToken = async () => {
    await api.attemptLoginWithToken(setAuth);
  };

  useEffect(() => {
    attemptLoginWithToken();
  }, []);


  return (
    <div>
    <Header/>
    <Routes>
    <Route path="/*" element={<Home auth={auth} logout={logout} setUser={setAuth} />} />
    </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
