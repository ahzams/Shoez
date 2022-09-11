import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Otp({ verify, setVerify, setDisp }) {

    // const navigate = useNavigate()

    const [codeOne, setCodeOne] = useState("")
    const [codeTwo, setCodeTwo] = useState("")
    const [codeThree, setCodeThree] = useState("")
    const [codeFour, setCodeFour] = useState("")
    const [codeFive, setCodeFive] = useState("")
    const [codeSix, setCodeSix] = useState("")

    const codeVerify = (e) => {
        let code = Number(codeOne + codeTwo + codeThree + codeFour + codeFive + codeSix)
        e.preventDefault()
        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log("code verified")
            console.log(user)
            setVerify(true)
            setDisp(false)
            // ...
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
        });

    }

    return (
        <motion.div className='otp-modal' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }} transition={{ duration: 0.6 }}>
            <form onSubmit={codeVerify}>
                <div className='otp-head'>
                    <h2>Verify your Mobile Number</h2>
                    <span className="material-symbols-outlined" onClick={() => setDisp(false)}>
                        close
                    </span>
                </div>
                <hr />
                <div className='otp-text'>
                    <h4>Please enter the OTP sent to mobile number</h4>
                </div>
                <div className='otp-control'>
                    <input className='input-text mob' type="number" value={codeOne} onChange={(e) => setCodeOne(e.target.value)} />
                    <input className='input-text mob' type="number" value={codeTwo} onChange={(e) => setCodeTwo(e.target.value)} />
                    <input className='input-text mob' type="number" value={codeThree} onChange={(e) => setCodeThree(e.target.value)} />
                    <input className='input-text mob' type="number" value={codeFour} onChange={(e) => setCodeFour(e.target.value)} />
                    <input className='input-text mob' type="number" value={codeFive} onChange={(e) => setCodeFive(e.target.value)} />
                    <input className='input-text mob' type="number" value={codeSix} onChange={(e) => setCodeSix(e.target.value)} />
                </div>
                <div className='otp-text' style={{textAlign:'center'}}>
                    <h4>You will receive an OTP in</h4> 
                </div>
                <div className='btn-otp'>
                    <button className='btn' type='submit'>Verify</button>
                </div>
            </form>
        </motion.div>
    )
}
