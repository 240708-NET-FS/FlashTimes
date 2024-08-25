// src/components/SignUpBox.tsx

import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../../contexts/UserContext';
import { registerUser } from '../../../services/UserService'; 
import { UserRegistrationDTO, UserRegistrationResponseDTO } from '../../../types/types';

const SignUpBox = () => {
  const signUpBox = {
    width: 250,
    height: '100%',
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
  const { setUser } = useContext(UserContext);

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser: UserRegistrationDTO = { firstName, lastName, userName, password };
      const response: UserRegistrationResponseDTO = await registerUser(newUser);

      // Optionally, log the user in immediately after registration
      setUser({
        userId: response.userId,
        userName: response.userName,
        firstName: response.firstName,
        lastName: response.lastName,
        createdAt: response.createdAt,
      });

      localStorage.setItem(
        'user',
        JSON.stringify({
          userId: response.userId,
          userName: response.userName,
          firstName: response.firstName,
          lastName: response.lastName,
          createdAt: response.createdAt,
        })
      );

      alert('User registered successfully!');
      setSubmitted(true);
      navigate('/home/' + response.userName);
    } catch (error: any) {
      alert('Registration failed. Please try again');
      console.error(error);
    }
  };

  return (
    <div>
      <div style={signUpBox}>
        <div>
          <h3>Sign Up</h3>
        </div>
        <form onSubmit={handleSignUp} className="flex flex-col">
          <input
            className="textBox mb-2"
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            className="textBox mb-2"
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            className="textBox mb-2"
            type="text"
            placeholder="Enter Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            className="textBox mb-2"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input className="submitBox" type="submit" value="Sign Up" />
        </form>
        <p className="pText">Already have an account?</p>
        <button onClick={() => navigate('/login')}>
          <b>
            <u>Login</u>
          </b>
        </button>
      </div>
    </div>
  );
};

export default SignUpBox;
