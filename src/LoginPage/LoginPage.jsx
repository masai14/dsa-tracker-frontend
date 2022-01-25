import LoginPageCSS from "./LoginPage.module.css";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useState, useContext } from "react";
import {AuthContext} from "../Contexts/AuthContextProvider";

const Login = () => {

    const { handleUserId } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [inEmail, setInEmail] = useState("");
    const [inPassword, setInPassword] = useState("");

    const signUp = () => { 
        let userName = name.split(" ");
        let obj = {
            email: email,
            password: password,
            firstName: userName[0],
            lastName: userName[1] || " "
        }

        var raw = JSON.stringify({...obj});

        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: raw,
        };

        fetch("https://dsa-tracker-api.herokuapp.com/user/", requestOptions)
        .then(response => response.json())
            .then((result) => {
                // console.log("result:", result);
                localStorage.setItem("userId", result._id);
                handleUserId();
            })
        .catch(error => console.log('error', error));

    }

    const signIn = () => { 

        let inObj = {
            email: inEmail,
            password: inPassword
        };
        
        var raw = JSON.stringify({...inObj});

        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: raw,
        };

        fetch("https://dsa-tracker-api.herokuapp.com/user/auth/login/", requestOptions)
        .then(response => response.json())
            .then((result) => {
                // console.log("result:", result);
                localStorage.setItem("userId", result._id);
                handleUserId();
            })
        .catch(error => console.log('error', error));

    }


    return (
        <div className={ LoginPageCSS.body}>
        <div className={LoginPageCSS.container} id="container">

            {/* sign up container */}
            <div className={`${LoginPageCSS.formContainer} ${LoginPageCSS.signUpContainer}`}>
                <form className={LoginPageCSS.form} onSubmit={(event) => { event.preventDefault();}}>
                    <h1 className={LoginPageCSS.h1}>Create Account</h1>
                    <div className={LoginPageCSS.socialContainer}>
                        <a target="_blank" rel="noreferrer" href="https://www.google.co.in/" className={`${LoginPageCSS.social} ${LoginPageCSS.a}`}><FaFacebookF/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.google.co.in/" className={`${LoginPageCSS.social} ${LoginPageCSS.a}`}><BsGoogle/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.google.co.in/" className={`${LoginPageCSS.social} ${LoginPageCSS.a}`}><FaLinkedinIn/></a>
                    </div>
                    <span className={LoginPageCSS.span}>or use your email for registration</span>
                    <input className={LoginPageCSS.input} value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Name" />
                    <input className={LoginPageCSS.input} value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Email" />
                    <input className={LoginPageCSS.input} value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                    <button className={LoginPageCSS.button} onClick={() => { signUp() }}>Sign Up</button>
                </form>
            </div>

            {/* Sign in container */}
            <div className={`${LoginPageCSS.formContainer} ${LoginPageCSS.signInContainer}`}>
                <form className={LoginPageCSS.form} onSubmit={(event) => { event.preventDefault();}}>
                    <h1 className={LoginPageCSS.h1}>Sign in</h1>
                    <div className={LoginPageCSS.socialContainer}>
                        <a target="_blank" rel="noreferrer" href="https://www.google.co.in/" className={`${LoginPageCSS.social} ${LoginPageCSS.a}`}><FaFacebookF/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.google.co.in/" className={`${LoginPageCSS.social} ${LoginPageCSS.a}`}><BsGoogle/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.google.co.in/" className={`${LoginPageCSS.social} ${LoginPageCSS.a}`}><FaLinkedinIn/></a>
                    </div>
                    <span className={LoginPageCSS.span}>or use your account</span>
                    <input className={LoginPageCSS.input} value={inEmail} onChange={(e) => { setInEmail(e.target.value) }} type="email" placeholder="Email" />
                    <input className={LoginPageCSS.input} value={inPassword} onChange={(e) => { setInPassword(e.target.value) }} type="password" placeholder="Password" />
                        <a className={LoginPageCSS.a} target="_blank" rel="noreferrer" href="https://www.google.co.in/">Forgot your password?</a>
                    <button className={LoginPageCSS.button} onClick={() => { signIn() }}>Sign In</button>
                </form>
            </div>

            {/* overlay container */}
            <div className={LoginPageCSS.overlayContainer}>
                <div className={LoginPageCSS.overlay}>
                    <div className={`${LoginPageCSS.overlayPanel} ${LoginPageCSS.overlayLeft}`}>
                        <h1 className={LoginPageCSS.h1}>Welcome Back!</h1>
                        <p className={LoginPageCSS.p}>To keep connected with us please login with your personal info</p>
                            <button className={`${LoginPageCSS.button}
                            ${LoginPageCSS.ghost}`}
                            id="signIn"
                            onClick={() => {
                            const container = document.getElementById('container');
                            container.classList.remove(`${LoginPageCSS.rightPanelActive}`);
                            }}
                        >Sign In</button>
                    </div>
                    <div className={`${LoginPageCSS.overlayPanel} ${LoginPageCSS.overlayRight}`}>
                        <h1 className={LoginPageCSS.h1}>Hello, Friend!</h1>
                        <p className={LoginPageCSS.p}>Enter your personal details and start journey with us</p>
                            <button className={`${LoginPageCSS.button}
                            ${LoginPageCSS.ghost}`}
                            id="signUp"
                            onClick={() => {
                            const container = document.getElementById('container');
                            container.classList.add(`${LoginPageCSS.rightPanelActive}`);
                            }}
                        >Sign Up</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
    );
}


export default Login;