import { registerUser } from '@services/UserService';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpBox = ({}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const signUpBox = {
    minWidth: 250,
    minHeight: 250,
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

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login');
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = { firstName, lastName, userName: username, password };
      await registerUser(newUser);
      alert('User registered successfully!');
      navigate('/login');
    } catch (error) {
      alert('Registration failed. Please try again');
    }
  };

  return (
    <div>
      <div style={signUpBox}>
        <div>
          <h3>Sign Up</h3>
        </div>
        <div className="flex">
          <form onSubmit={handleSignUp} className="flex flex-col">
            <div className="mb-2">
              <input
                className="textBox"
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <input className="textBox" type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div style={{ padding: 2 }}>
              <input className="textBox" type="text" placeholder="Enter Username: " value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div style={{ padding: 2 }}>
              <input className="textBox" type="text" placeholder="Enter Password: " value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div style={{ padding: 2 }}>
              <input className="submitBox" type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
        <div>
          <p className="pText">Already have an account?</p>
          <button onClick={navigateLogin}>
            <b>
              <u>Login</u>
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpBox;
