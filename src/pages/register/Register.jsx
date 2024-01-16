import React, { useRef, useState } from 'react';
import './Register.css';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const emailRef = useRef();
    const passwordRef = useRef();
  
    const handleStart = () => {
      setEmail(emailRef.current.value);
    };
    const handleFinish = () => {
      setPassword(passwordRef.current.value);
    };

    return (
        <div className='register'>
            <div className='top'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"/>
                <button>Sign In</button>
            </div>
            <div className='bottom'>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email?(
                    <div className='inputArea'>
                        <input placeholder='Enter Email' ref={emailRef}/>
                        <button onClick={handleStart}>Get Started</button>
                    </div>
                ):(
                    <form className='inputArea'>
                        <input placeholder='password' type='password' ref={passwordRef}/>
                        <button onClick={handleFinish}>Start</button>
                    </form>
                )}    
            </div>
        </div>
    );
}

export default Register;
