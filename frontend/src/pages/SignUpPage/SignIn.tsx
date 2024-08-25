import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SignUpBox from './components/SignUpBox';

const SignIn = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(submitted);
    if (submitted) {
      navigate('/login');
    }
  }, [submitted]);
  return (
    <div style={{ marginTop: 75 }}>
      <SignUpBox
       
      />
    </div>
  );
};

export default SignIn;
