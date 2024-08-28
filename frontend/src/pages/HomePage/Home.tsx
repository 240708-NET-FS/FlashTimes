import { UserContext } from '../../contexts/UserContext';
import React, { useContext, useEffect } from 'react';
import SetsContainer from './components/SetsContainer';

const Home = () => {
  const {user, setUser} = useContext(UserContext);

  // TODO: get sets from users 
  // Ask about endpoint for that. doesn't look like there's one


  // for UI prototype


  return(
    <div style={{display: 'flex' , alignItems: 'center', flexDirection: 'column', }}>
      
      
      <div style={{ width: '80%'}}>
          
        <SetsContainer />
      </div>
    </div>
  )
};

export default Home;
