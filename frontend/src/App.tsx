import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import React, { createContext, useState } from 'react';
import Landing from './pages/LandingPage/Landing';
import SignUp from './pages/SignUpPage/SignIn';
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';

export const UserContext = React.createContext<null | any>(null);

function App() {
  // TODO: find a better way to type safe this thing
  const [user, setUser] = useState<null | any>(null);

  const [isAuth, setIsAuth] = useState<boolean>(false);

  // when user auths in

  // try use navigate for navigating instead

  const navigate = useNavigate();

  const navigateTo = (route: string) => {
      navigate(route);

  }


  const changeTextColor = (e: any) => {
    var navTitle = document.getElementById("titleLink");
    if(navTitle){
      if(e.type === "mouseover") {
        navTitle.style.backgroundColor = '#94bdde';
      }else{
        navTitle.style.backgroundColor = 'transparent';
      }
    }
    
    
  }

  return (
    <div className="App" data-testid="app-page">
      <UserContext.Provider value={{ user: user, setUser }}>
        <header className="App-header">
          {/* potentially make a navbar component */}
          <div id="navbar-pos"style={{ width: '50%', display: 'inherit' }}>
            <ul id="navbar">
              <li id="titleWrap">
                <a id="titleLink" 
                  className="navLink" 
                  
                  onMouseOver={changeTextColor} 
                  onMouseOut={changeTextColor} 
                  onClick={()=> navigateTo("/")}
                  >
                  FlashTimes
                </a>
              </li>
              <li>
                <a 
                  className="navLink" 
                  // href="/sign-up"
                  onClick={()=> navigateTo("/sign-up")}

                  >
                  Sign Up
                </a>
              </li>
              {/* <li><a className="navLink" href="/">Landing</a></li> */}
            </ul>
          </div>

            <div style={{backgroundColor: '#43849c'}}>
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
