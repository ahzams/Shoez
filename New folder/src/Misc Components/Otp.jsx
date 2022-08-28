import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Otp({ verify, setVerify, setDisp }) {

    // const navigate = useNavigate()

    const [code, setCode] = useState()

    const codeVerify = (e) => {

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
        <div className='otp-modal'>
            <form onSubmit={codeVerify}>
                <div className='otp-head'>
                    <h2>Verify your Mobile Number</h2>
                    <span class="material-symbols-outlined" onClick={() => setDisp(false)}>
                        close
                    </span>
                </div>
                <hr />
                <div className='otp-text'>
                    <h4>Please enter the OTP sent to mobile number</h4>
                </div>
                <div className='otp-control'>
                    <input className='input-text mob' type="number" value={code} onChange={(e) => setCode(e.target.value)} />
                    <input className='input-text mob' type="number" value={code} onChange={(e) => setCode(e.target.value)} />
                    <input className='input-text mob' type="number" value={code} onChange={(e) => setCode(e.target.value)} />
                    <input className='input-text mob' type="number" value={code} onChange={(e) => setCode(e.target.value)} />
                    <input className='input-text mob' type="number" value={code} onChange={(e) => setCode(e.target.value)} />
                    <input className='input-text mob' type="number" value={code} onChange={(e) => setCode(e.target.value)} />
                </div>
                <div className='otp-text' style={{textAlign:'center'}}>
                    <h4>You will receive an OTP in</h4> 
                </div>
                <div className='btn-otp'>
                    <button className='btn' type='submit'>Verify</button>
                </div>
            </form>
        </div>
    )
}
