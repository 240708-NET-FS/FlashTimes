import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'
import Landing from './pages/LandingPage/Landing';
import SignUp from './pages/SignUpPage/SignIn';
import Home from './pages/HomePage/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/signUp",
    element: <SignUp />
  },
  {
    path: "/home/:username",
    element: <Home />
  }

]);

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
  document.getElementById('root'),
)
