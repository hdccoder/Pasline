import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Link, HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Header from './Components/Header';
import api from './api';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    //blue
    primary: {
      main: '#9ad8eb',
      light: '#bbe4f2',
      dark: '#66c4e1',
      contrastText: '#3d3d3d',
    },
    //cream
    secondary: {
      main: '#efe19f',
      light: '#f8f3dd',
      dark: '#eadb99',
    },
    //purple
    accentPurple: {
      dark: '#c999ff',
      main: '#d3adff',
      light: '#e9d6ff',
    },
    //pink
    accentPink: {
      dark: '#FE86AE',
      main: '#FEA0C0',
      light: '#FEC2D6',
      darkest: '#fd5d93'
    },
    //yellow
    accentYellow: {
      main: 'eeee73',
    },
    //very light blue
    background: {
      default: '#ffff',
    },
    text: {
      primary: '#0319bd',
      secondary: '#0319bd',
    },
  },
  typography: {
    fontWeightLight: 200,
    fontFamily: 'noteworthy',
    h1: {
      fontFamily: 'noteworthy',
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'noteworthy',
      fontWeight: 800,
    },
    h3: {
      fontFamily: 'noteworthy',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'noteworthy',
      fontWeight: 520,
    },
    h5: {
      fontFamily: 'noteworthy',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'noteworthy',
      fontWeight: 400,
    },
    body1: {
      fontWeight: 550
    },
    body2: {
      fontWeight: 500
    }
  },
});






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
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
    <Routes>
    <Route path="/*" element={<Home auth={auth} logout={logout} setUser={setAuth} />} />
    </Routes>
    </ThemeProvider>

  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
