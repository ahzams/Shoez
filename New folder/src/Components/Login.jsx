import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/Shoez-logos_black.png'
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"

export default function Login() {

    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const fbProvider = new FacebookAuthProvider()

    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then((response) => {
                console.log(response.user);
            })
            .catch((err) => {
                alert(err.message);
            })
    };

    const handleFacebook = () => {
        signInWithPopup(auth, fbProvider)
            .then((response) => {
                console.log(response.user);
            })
            .catch((err) => {
                alert(err.message);
            })
    };

    const navigate = useNavigate()

    return (
        <div className='form-container'>
            <div className="logo signup-logo">
                <img onClick={() => { navigate("/") }} src={logo} alt="" />
            </div>
            <div className="signin-signup" id="login">
                <form action="" className="signin-form" id="sign-in">
                    <h1>Sign in</h1>
                    <div className="form-control">
                        <i className="fas fa-user"></i>
                        <input className="input-text" type="text" placeholder="Email or Mobile No." />
                    </div>
                    <div className="form-control">
                        <i className="fas fa-lock"></i>
                        <input className="input-text" type="password" placeholder="Password" />
                    </div>

                    <div className="login-btn">
                        <button className="btn">Login</button>
                    </div>

                    <div className="platforms">
                        <h5>New to Shoez?</h5>
                        <div className="create-btn">
                            <button className="btn" onClick={() => navigate("/Signup")}>Create your Shoez Account</button>
                        </div>
                        <h4 className="f-weight">Or Sign in with</h4>
                        <div className="platform-login">
                            <a href="#" className="fa fa-facebook fa-2x" onClick={handleFacebook}></a>
                            <a href="#" className="fa fa-google fa-2x" onClick={handleGoogle}></a>
                        </div>
                    </div>
                </form>
            </div>
            {/* <Link className='link' to="/">
                Back to Home?
            </Link> */}
        </div>
    )
}
