import { loginUser } from '@services/UserService';
import { UserContext } from 'App';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

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

  
  const {user, setUser} = useContext(UserContext);
    
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

    const loginButton = {
        outline: 'none',
    };


 
    const navigate = useNavigate();

    // const navigateLogin = () => {
    //     navigate("/login");
    // }

    // add icon for displaying pw 
    const validateText = () => {
        if(username.length === 0 || password.length === 0){
            alert("Invalid input! Please re-enter information!");
        }else{
            setSubmitted(true);
        }
        // if(u === null || pw === null){
        //     window.alert("Invalid input! Please re-enter information!");
        // }
    }

    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const u = { username, password};
        const response = await loginUser(u);
        console.log(response);
        setUser(response);
        alert('User logged in successfully!');
        // setUser(user);
        navigate(`/home/${username}`);
      } catch (error) {
        console.log(error);
        alert('Login failed. Please try again');
      }
    };


    return(
        <div style={loginBox}>
        <div>
          <h3>Login</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <form onSubmit={handleLogin} >
          <div style={{ padding: 2 }}>
            <input
              className="textBox"
              type="text"
              placeholder="Enter Username: "
              value={username}
              onChange={(e) => setU(e.target.value)}
            />
          </div>
          <div style={{ padding: 2 }}>
            <input
              className="textBox"
              type="password"
              placeholder="Enter Password: "
              value={password}
              onChange={(e) => setPw(e.target.value)}
            />
          </div>
          <div style={{ padding: 2 }}>
            <input className="submitBox" type="submit" value="Login" />

          </div>
          </form>
        </div>
        {/* <div>
                    <p className="pText">Already have an account?</p>
                    <button 
                        style={loginButton}
                        onClick={navigateLogin}>
                            <b><u>Login</u></b>
                            </button>
                </div> */}
      </div>
    
  );
};

export default LoginBox;
