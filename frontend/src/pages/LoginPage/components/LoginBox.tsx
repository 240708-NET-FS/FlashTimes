import React from "react";
import { useNavigate } from "react-router-dom";


const LoginBox = ({u, pw, setU, setPw, setSubmitted}:{u:string, pw:string, setU: any, setPw: any, setSubmitted: any}) => {


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

    const loginButton ={
        outline: 'none',
        
    }

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login");
    }

    // add icon for displaying pw 
    const validateText = () => {
        if(u.length === 0 || pw.length === 0){
            alert("Invalid input! Please re-enter information!");
        }else{
            setSubmitted(true);
        }
        // if(u === null || pw === null){
        //     window.alert("Invalid input! Please re-enter information!");
        // }
        
        

    }


    return(
        <div>
            <div style={loginBox}>
                <div>
                    <h3>Login</h3>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{padding: 2}}>
                            <input className="textBox" type="text" placeholder="Enter Username: " value={u} onChange={e => setU(e.target.value)}/>
                        </div>
                        <div style={{padding: 2}}>
                            <input className="textBox" type="password" placeholder="Enter Password: " value={pw} onChange={e => setPw(e.target.value)}/>
                        </div>
                        <div style={{padding: 2}}>
                            <button className="submitBox" type="submit" onClick={validateText}>Submit</button>
                        </div>
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
        </div>
       
    )
}

export default LoginBox;