'use client'
import Link from "next/link";
import './loging-sign-up.css'
import { LogIn } from "../Components/LogIn/LogIn";
import { useState } from "react";


const LogingSignUpPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const handleLogIn = () => {
        setIsLoggedIn(true);
        setIsSignUp(false);
    }
    const handleSignUp = () => {
        setIsLoggedIn(false);
        setIsSignUp(true);
    }
    return(
        <div className='loging-signup'>
            <h1>WELCOME TO Loging Sign Up Page</h1>
            <p>LogingSignUpPage</p>
            <div>
                <button onClick={handleLogIn}>
                    Log In
                </button>
                <button onClick={handleSignUp}>
                    Sign Up
                </button>
            </div>
            {isLoggedIn && <LogIn/>}
            {isSignUp && <></>}
            
            <Link href="/">
            <button>
                back
            </button>
        </Link>
        </div>
        
    )
}

export default LogingSignUpPage;