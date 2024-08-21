import React from "react";
import { useNavigate } from "react-router-dom";


const SignUpBox = ({}) => {
    const signUpBox = {
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

  

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login");
    }

    return(
        <div>
            <div style={signUpBox}>
                <div>
                    <h3>Sign Up</h3>
                </div>
                <div style={{display: 'flex'}}>
                    <form style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{padding: 2}}>
                            <input className="textBox" type="text" placeholder="Enter Username: "/>
                        </div>
                        <div style={{padding: 2}}>
                            <input className="textBox" type="text" placeholder="Enter Password: "/>
                        </div>
                        <div style={{padding: 2}}>
                            <input className="submitBox" type="submit" placeholder="Sign Up" />
                        </div>
                    </form>
                </div>
                <div>
                    <p className="pText">Already have an account?</p>
                    <button 
                        onClick={navigateLogin}>
                            <b><u>Login</u></b>
                            </button>
                </div>
            </div>
        </div>
       
    )
}

export default SignUpBox;