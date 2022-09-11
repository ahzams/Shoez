import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import logo from '../assets/Shoez-logos_black.png'
import Otp from '../Misc Components/Otp'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { database } from '../firebaseConfig'
import Spinner from '../Misc Components/Spinner'
import { motion } from 'framer-motion'

export default function Signup({ verify, setVerify }) {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [disp, setDisp] = useState(false)
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [phone, setPhone] = useState("")
    const [passTick, setPassTick] = useState(false)
    const [confirmPassTick, setConfirmPassTick] = useState(false)

    const auth = getAuth()

    // const handleSubmit = () => {
    //     createUserWithEmailAndPassword(auth, email, pass)
    //         .then((response) => {
    //             console.log(response.user);
    //             setEmail("")
    //             setPass("")
    //             setConfirmPass("")
    //             navigate("/Login")
    //         })
    //         .catch((err) => {
    //             alert(err.message);
    //         })
    // }

    function handleSubmit() {
        if (username.length > 0 && email.length > 0 && pass === confirmPass && pass.length >= 8 && verify) {
            let data = {
                username: username,
                email: email,
                password: pass,
                mobile: phone,
            }

            const collectionref = collection(database, "users");
            addDoc(collectionref, {
                data
            }).then(() => {
                alert("User added")
            }).catch((err) => {
                alert(err.message);
            })
        }
    }

    const handleUsername = async (e) => {
        setUsername(e)

        const q = query(
            collection(database, "users"),
            where("data.username", "==", e)
        )

        const querySnapshot = await getDocs(q);
        if (querySnapshot._snapshot.docChanges.length != 0) {
            console.log("username already exists")
        }
    }

    const onSignInSubmit = (e) => {

        e.preventDefault()
        captchaVerify()

        // if (phone.length === 10) {
        const phoneNumber = "+91" + phone
        const appVerifier = window.recaptchaVerifier;

        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                setDisp(true)
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });
        // }
    }

    const captchaVerify = () => {

        window.recaptchaVerifier = new RecaptchaVerifier('verify-btn', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log("Recaptcha verified")
                onSignInSubmit();
            }
        }, auth);

    }

    useEffect(() => {
        if (confirmPass === pass && confirmPass.length >= 7) {
            setConfirmPassTick(true)
        }
        else {
            setConfirmPassTick(false)
        }

        if (pass.length >= 8) {
            setPassTick(true)
        }
        else {
            setPassTick(false)
        }
    }, [confirmPass, pass])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return (
        <>
            {
                loading ?
                    <Spinner loading={loading} />
                    :
                    <motion.div className='form-container' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }} transition={{ duration: 0.6 }}>
                        <div className="signin-signup">
                            <div className="logo signup-logo">
                                <img onClick={() => { navigate("/") }} src={logo} alt="" />
                            </div>
                            <form action="" className="signup-form" id="sign-up">
                                <h1>Create Account</h1>
                                <div className="form-control">
                                    <i className="fas fa-user"></i>
                                    <input className="input-text" type="text" placeholder="Username" onChange={(e) => handleUsername(e.target.value)} />
                                </div>
                                <div className="form-control mob-no">
                                    <i className="fas fa-phone-alt"></i>
                                    <input className="input-text mob" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Mobile" />
                                    <span className={`${verify ? "material-symbols-outlined tick" : "disp"}`}>
                                        check
                                    </span>
                                    <div className="verify">
                                        <a id="verify-btn" onClick={onSignInSubmit}>Verify</a>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <i className="fas fa-envelope"></i>
                                    <input className="input-text" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                                </div>
                                <div className="form-control">
                                    <i className="fas fa-lock"></i>
                                    <input className="input-text" value={pass} onChange={(e) => { setPass(e.target.value) }} type="password" placeholder="Password" />
                                    <span className={`${passTick ? "material-symbols-outlined tick" : "disp"}`}>
                                        check
                                    </span>
                                </div>
                                <div className="form-control">
                                    <i className="fas fa-lock"></i>
                                    <input className="input-text" value={confirmPass} onChange={(e) => { setConfirmPass(e.target.value) }} type="password" placeholder="Confirm Password" />
                                    <span className={`${confirmPassTick ? "material-symbols-outlined tick" : "disp"}`}>
                                        check
                                    </span>
                                </div>

                                <div className="login-btn">
                                    <button className="btn" type='button' onClick={handleSubmit}>Create an Account</button>
                                </div>

                                <div className="platforms">
                                    <h4 id="signin-link" onClick={() => navigate("/Login")}>Already have an account?Sign in.</h4>
                                </div>
                            </form>
                        </div>
                        <div className={`${disp ? "otp" : "disp"}`}>
                            {/* <div className="otp"> */}
                            <Otp setDisp={setDisp} verify={verify} setVerify={setVerify} />
                        </div>
                        {/* <Link className='link' to="/">
                Back to Home?
            </Link> */}
                    </motion.div>
            }
        </>
    )
}
