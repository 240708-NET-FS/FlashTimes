import './App.css';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import { UserContext } from './contexts/UserContext';
import Home from './pages/HomePage/Home';
import Landing from './pages/LandingPage/Landing';
import Login from './pages/LoginPage/Login';
import SignUp from './pages/SignUpPage/SignIn';
import { UserResponseDTO } from './types/types';

// export const UserContext = React.createContext<null | any>('');

function App() {
  // TODO: find a better way to type safe this thing
  const [user, setUser] = useState<UserResponseDTO | any>(null);
  const navigate = useNavigate();

  // Initialize user from localStorage if available
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to navigate to a specific route
  const navigateTo = (route: string) => {
    navigate(route);
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user from localStorage
    navigate('/');
  };

  // Function to change text color on hover (optional)
  const changeTextColor = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const navTitle = document.getElementById('titleLink');
    if (navTitle) {
      navTitle.style.backgroundColor = e.type === 'mouseover' ? '#94bdde' : 'transparent';
    }
  };

  // make a new set link, show sets on home

  return (
    <div className="App" data-testid="app-page">
      <UserContext.Provider value={{ user: user, setUser }}>
        <header className="App-header">
          {/* Navigation Bar */}
          <div id="navbar-pos">
            <ul id="navbar">
              <li id="titleWrap">
                <a id="titleLink" className="navLink" onMouseOver={changeTextColor} onMouseOut={changeTextColor} onClick={() => navigateTo('/')}>
                  FlashTimes
                </a>
              </li>
              {!user ? (
                <>
                  <li>
                    <a className="navLink" onClick={() => navigateTo('/sign-up')}>
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a className="navLink" onClick={() => navigateTo('/Login')}>
                      Login
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <a className="navLink" onClick={logout}>
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div style={{ backgroundColor: '#43849c' }}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/home/:username" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </header>
      </UserContext.Provider>

      {/* <header className="App-header">
        <p className="header">
          🚀 Vite + React + Typescript + React Testing Library 🤘 <br />& Eslint
          🔥+ Prettier
        </p>

        <div className="body">
          <button onClick={() => setCount((count) => count + 1)}>
            🪂 Click me : {count}
          </button>

          <p>
            {' '}
            Don&apos;t forgot to install Eslint and Prettier in Your Vscode.
          </p>

          <p>
            Mess up the code in <code>App.tsx </code> and save the file.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer">
              Vite Docs
            </a>
          </p>
        </div>
      </header> */}
    </div>
  );
}

export default App;
