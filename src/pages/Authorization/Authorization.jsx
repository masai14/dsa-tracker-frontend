import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useState, useContext } from "react";
import AuthPageStyles from "./Authorization.module.css";

export const Authorization = () => {
  // const { handleUserId } = useContext();

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

    var raw = JSON.stringify({ ...obj });

    var requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: raw,
    };

    fetch("https://dsa-tracker-api.herokuapp.com/user/", requestOptions)
      .then(response => response.json())
      .then((result) => {
        // console.log("result:", result);
        localStorage.setItem("userId", result._id);
        // handleUserId();
      })
      .catch(error => console.log('error', error));

  }

  const signIn = () => {

    let inObj = {
      email: inEmail,
      password: inPassword
    };

    var raw = JSON.stringify({ ...inObj });

    var requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: raw,
    };

    fetch("https://dsa-tracker-api.herokuapp.com/user/auth/login/", requestOptions)
      .then(response => response.json())
      .then((result) => {
        // console.log("result:", result);
        localStorage.setItem("userId", result._id);
        // handleUserId();
      })
      .catch(error => console.log('error', error));

  }


  return (
    // <div className='bg-[#f6f5f7] flex justify-center items-center flex-col h-screen -mt-[1.25rem] mx-0 mb-[3.125rem] box-border'>
    <section className='flex justify-center items-center bg-[#f6f5f7] m-auto h-screen'>
      <div className={AuthPageStyles.authContainer} id="container">

        {/* sign up container */}
        <div className={`${AuthPageStyles.formContainer} ${AuthPageStyles.signUpContainer}`}>
          <form className='bg-white flex items-center	justify-center flex-col	py-0 px-12 h-full	text-center box-border' onSubmit={(event) => { event.preventDefault(); }}>
            <h1 className='text-[2em] font-bold m-0 box-border'>Create Account</h1>
            <div className='my-5 mx-0	box-border'>
              <a target="_blank" rel="noreferrer" href="/notyetimplemented" className='text-[#333] text-sm no-underline border-[1px] border-[#DDDDDD] rounded-[50%]	inline-flex	justify-center	items-center	my-0 mx-1	h-10 w-10	box-border'><FaFacebookF /></a>
              <a target="_blank" rel="noreferrer" href="/notyetimplemented" className='text-[#333] text-sm no-underline border-[1px] border-[#DDDDDD] rounded-[50%]	inline-flex	justify-center	items-center	my-0 mx-1	h-10 w-10	box-border'><BsGoogle /></a>
              <a target="_blank" rel="noreferrer" href="/notyetimplemented" className='text-[#333] text-sm no-underline border-[1px] border-[#DDDDDD] rounded-[50%]	inline-flex	justify-center	items-center	my-0 mx-1	h-10 w-10	box-border'><FaLinkedinIn /></a>
            </div>
            <span className='text-xs box-border'>or use your email for registration</span>
            <input className='rounded-lg bg-[#eee]	border-none	py-3 px-4 my-2 mx-0	w-full outline-none	box-border' value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Name" />
            <input className='rounded-lg bg-[#eee]	border-none	py-3 px-4 my-2 mx-0	w-full outline-none	box-border' value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Email" />
            <input className='rounded-lg bg-[#eee]	border-none	py-3 px-4 my-2 mx-0	w-full outline-none	box-border' value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
            <button className='rounded-lg border border-[#990CC0] bg-[#990CC0] text-[#FFFFFF] text-xs font-bold	py-[0.75rem] px-11 tracking-wider uppercase	transition-transform ease-in duration-[80ms] box-border active:scale-95 focus:outline-none' onClick={() => { signUp() }}>Sign Up</button>
          </form>
        </div>

        {/* Sign in container */}
        <div className={`${AuthPageStyles.formContainer} ${AuthPageStyles.signInContainer}`}>
          <form className='bg-white flex items-center	justify-center flex-col	py-0 px-12 h-full	text-center box-border' onSubmit={(event) => { event.preventDefault(); }}>
            <h1 className='text-[2em] font-bold m-0 box-border'>Sign in</h1>
            <div className='my-5 mx-0 box-border'>
              <a target="_blank" rel="noreferrer" href="/notyetimplemented" className='text-[#333] text-sm no-underline border-[1px] border-[#DDDDDD] rounded-[50%]	inline-flex	justify-center	items-center	my-0 mx-1	h-10 w-10	box-border'><FaFacebookF /></a>
              <a target="_blank" rel="noreferrer" href="/notyetimplemented" className='text-[#333] text-sm no-underline border-[1px] border-[#DDDDDD] rounded-[50%]	inline-flex	justify-center	items-center	my-0 mx-1	h-10 w-10	box-border'><BsGoogle /></a>
              <a target="_blank" rel="noreferrer" href="/notyetimplemented" className='text-[#333] text-sm no-underline border-[1px] border-[#DDDDDD] rounded-[50%]	inline-flex	justify-center	items-center	my-0 mx-1	h-10 w-10	box-border'><FaLinkedinIn /></a>
            </div>
            <span className='text-xs box-border'>or use your account</span>
            <input className='rounded-lg bg-[#eee]	border-none	py-3 px-4 my-2 mx-0	w-full outline-none	box-border' value={inEmail} onChange={(e) => { setInEmail(e.target.value) }} type="email" placeholder="Email" />
            <input className='rounded-lg bg-[#eee]	border-none	py-3 px-4 my-2 mx-0	w-full outline-none	box-border' value={inPassword} onChange={(e) => { setInPassword(e.target.value) }} type="password" placeholder="Password" />
            <a className='text-[#333] text-sm no-underline my-4 mx-0 box-border' target="_blank" rel="noreferrer" href="/notyetimplemented">Forgot your password?</a>
            <button className='rounded-lg border border-[#1072B9] bg-[#1072B9] text-[#FFFFFF] text-xs font-bold	py-[0.75rem] px-11 tracking-wider uppercase	transition-transform ease-in duration-[80ms] box-border active:scale-95 focus:outline-none' onClick={() => { signIn() }}>Sign In</button>
          </form>
        </div>

        {/* overlay container */}
        <div className={AuthPageStyles.overlayContainer}>
          <div className={AuthPageStyles.overlay}>
            <div className={`${AuthPageStyles.overlayPanel} ${AuthPageStyles.overlayLeft}`}>
              <h1 className='text-[2em] font-bold m-0 box-border'>Welcome Back!</h1>
              <p className='text-sm font-thin leading-5 tracking-[0.0313rem] mt-[1.25rem] mx-0 mb-[1.875rem] box-border'>To keep connected with us please login with your personal info</p>
              <button className='rounded-lg border border-[#FFF] bg-transparent text-[#FFFFFF] text-xs font-bold	py-[0.75rem] px-11 tracking-wider uppercase	transition-transform ease-in duration-[80ms] box-border active:scale-95 focus:outline-none '
                id="signIn"
                onClick={() => {
                  const container = document.getElementById('container');
                  container.classList.remove(`${AuthPageStyles.rightPanelActive}`);
                }}
              >Sign In</button>
            </div>
            <div className={`${AuthPageStyles.overlayPanel} ${AuthPageStyles.overlayRight}`}>
              <h1 className='text-[2em] font-bold m-0 box-border'>Hello, Friend!</h1>
              <p className='text-sm font-thin leading-5 tracking-[0.0313rem] mt-[1.25rem] mx-0 mb-[1.875rem] box-border'>Enter your personal details and start journey with us</p>
              <button className='rounded-lg border border-[#FFF] bg-transparent text-[#FFFFFF] text-xs font-bold	py-[0.75rem] px-11 tracking-wider uppercase	transition-transform ease-in duration-[80ms] box-border active:scale-95 focus:outline-none '
                id="signUp"
                onClick={() => {
                  const container = document.getElementById('container');
                  container.classList.add(`${AuthPageStyles.rightPanelActive}`);
                }}
              >Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}