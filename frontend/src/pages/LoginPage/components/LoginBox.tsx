import { loginUser } from '@services/UserService';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../../contexts/UserContext';

const LoginBox = ({
  username,
  password,
  setU,
  setPw,
  setSubmitted,
}: {
  username: string;
  password: string;
  setU: any;
  setPw: any;
  setSubmitted: any;
}) => {
  const loginBox = {
    width: 250,
    height: 250,
    backgroundColor: 'white',
    color: 'black',
    padding: 20,
    borderRadius: 5,
    // textAlign: 'left' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    // borderColor: '#cfe8ef',
    // overflow: 'hidden',
  };

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const validateText = () => {
    if (username.length === 0 || password.length === 0) {
      alert('Invalid input! Please re-enter information!');
    } else {
      setSubmitted(true);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const credentials = { userName: username, password };
      const userResponse = await loginUser(credentials);

      setUser(userResponse); // Update context
      localStorage.setItem('user', JSON.stringify(userResponse)); // Store in localStorage

      alert('User logged in successfully!');
      navigate(`/home/${username}`);
    } catch (error) {
      console.log(error);
      alert('Login failed. Please try again');
    }
  };

  return (
    <div>
      <div style={loginBox}>
        <div>
          <h3>Login</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <form onSubmit={handleLogin}>
            <div style={{ padding: 2 }}>
              <input className="textBox" type="text" placeholder="Enter Username: " value={username} onChange={(e) => setU(e.target.value)} />
            </div>
            <div style={{ padding: 2 }}>
              <input className="textBox" type="password" placeholder="Enter Password: " value={password} onChange={(e) => setPw(e.target.value)} />
            </div>
            <div style={{ padding: 2 }}>
              <input className="submitBox" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
