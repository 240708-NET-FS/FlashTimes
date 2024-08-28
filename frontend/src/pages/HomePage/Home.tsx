import { UserContext } from '../../contexts/UserContext';
import React, { useContext, useEffect } from 'react';
import SetsContainer from './components/SetsContainer';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const {user, setUser} = useContext(UserContext);
  const location = useLocation();

  // TODO: get sets from users 
  // Ask about endpoint for that. doesn't look like there's one


  // for UI prototype

  useEffect(()=> {
    console.log("Reload the page...")
  }, [location])


  return(
    <div style={{display: 'flex' , alignItems: 'center', flexDirection: 'column', }}>
      
      
      <div style={{ width: '80%'}}>
          
        <SetsContainer />
      </div>
    </div>
  )
};

export default Home;
