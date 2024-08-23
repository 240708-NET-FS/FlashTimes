import React, { useEffect, useState } from 'react';
import SignUpBox from './components/SignUpBox';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(()=> {
    console.log(submitted);
    if(submitted){
      navigate("/login");
    }
  }, [submitted])
  return (
    <div style={{marginTop: 75}}>
      <SignUpBox 
        firstName={fName}
        lastName={lName}
        userName={username}
        password={password}
        setFirstName={setFName}
        setLastName={setLName}
        setU={setUsername}
        setPw={setPassword}
        setSubmitted={setSubmitted}
    
    />
    </div>
    
  )
};

export default SignIn;
