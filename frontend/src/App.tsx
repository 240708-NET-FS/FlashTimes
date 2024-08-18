import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import React, { createContext, useState } from 'react'
import Landing from './pages/LandingPage/Landing'
import SignUp from './pages/SignUpPage/SignIn'
import Home from './pages/HomePage/Home'

export const UserContext = React.createContext<null | any>(null);

function App() {

  // TODO: find a better way to type safe this thing
  const [user, setUser] = useState<null | any>(null);

  const [isAuth, setIsAuth] = useState<boolean>(false);

  // when user auths in 

  return (
    <div className="App" data-testid="app-page">
      <UserContext.Provider value={{user: user, setUser}}>
        <header className='App-header'>
          <div style={{width: '50%', display:'inherit'}}>
              <ul id="navbar">
                <li id="titleWrap"><a id="titleLink" className="navLink" href="/">FlashTimes</a></li>
                <li><a className="navLink" href="/sign-in">Sign In</a></li>
                {/* <li><a className="navLink" href="/">Landing</a></li> */}
              </ul>
          </div>
        
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/home/:username" element={<Home />} />
            </Routes>
          </BrowserRouter>

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
  )
}

export default App
