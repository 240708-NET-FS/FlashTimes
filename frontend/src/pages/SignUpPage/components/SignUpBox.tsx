import { registerUser } from '@services/UserService';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpBox = ({
  firstName,
  lastName,
  setFirstName,
  setLastName,
  userName,
  password,
  setU,
  setPw,
  setSubmitted
}: {
  firstName: string;
  lastName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  password: string;
  setU: React.Dispatch<React.SetStateAction<string>>;
  setPw: React.Dispatch<React.SetStateAction<string>>;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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

  const navigateLogin = () => {
    navigate('/login');
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = { firstName, lastName, userName, password };
      await registerUser(newUser);
      alert('User registered successfully!');
      navigate('/login');
    } catch (error) {
      alert('Registration failed. Please try again');
    }
  };

  //   return (
  //     <div>
  //       <div style={signUpBox}>
  //         <div>
  //           <h3>Sign Up</h3>
  //         </div>
  //         <div className="flex">
  //           <form onSubmit={handleSignUp} className="flex flex-col">
  //             <div className="mb-2">
  //               <input
  //                 className="textBox"
  //                 type="text"
  //                 placeholder="Enter First Name"
  //                 value={firstName}
  //                 onChange={(e) => setFirstName(e.target.value)}
  //               />
  //             </div>
  //             <div className="mb-2">
  //               <input className="textBox" type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
  //             </div>
  //             <div style={{ padding: 2 }}>
  //               <input className="textBox" type="text" placeholder="Enter Username: " value={username} onChange={(e) => setUsername(e.target.value)} />
  {
    /* const validateText = () => {
        if(fName.length === 0 || lName.length === 0 || u.length === 0 || pw.length === 0){
            alert("Invalid input! Please re-enter information!");
        }else{
            setSubmitted(true);
        }
        // if(u === null || pw === null){
        //     window.alert("Invalid input! Please re-enter information!");
        // }

    } */
  }

  return (
    <div>
      <div style={signUpBox}>
        <div>
          <h3>Sign Up</h3>
        </div>
        <div className="flex">
          <form onSubmit={handleSignUp} className="flex flex-col">
            <div className="mb-2" style={{ padding: 2 }}>
              <input
                className="textBox"
                type="text"
                placeholder="Enter First Name: "
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div style={{ padding: 2 }}>
              <input className="textBox" type="text" placeholder="Enter Last Name: " value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <br />
            <div style={{ padding: 2 }}>
              <input className="textBox" type="text" placeholder="Enter Username: " value={userName} onChange={(e) => setU(e.target.value)} />
            </div>
            <div style={{ padding: 2 }}>
              <input className="textBox" type="password" placeholder="Enter Password: " value={password} onChange={(e) => setPw(e.target.value)} />
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
