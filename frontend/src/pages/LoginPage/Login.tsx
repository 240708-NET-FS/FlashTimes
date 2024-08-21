import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../App';
import LoginBox from './components/LoginBox';

const Login = ({}) => {
  // for authenticating things
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [submitted, setSubmitted] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    //authenticate user stuff here(?)
    submitted ? navigate(`/home/${username}`) : null;
  }, [submitted]);

  // could do basic client side text validation || verify by backend

  return (
    <div>
      <LoginBox
        u={username}
        pw={password}
        setU={setUsername}
        setPw={setPassword}
        setSubmitted={setSubmitted}
      />
    </div>
  );
};

export default Login;
