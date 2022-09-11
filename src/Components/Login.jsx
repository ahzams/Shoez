import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import logo from '../assets/Shoez-logos_black.png'
import { database } from '../firebaseConfig'
import Spinner from '../Misc Components/Spinner'
import { motion } from 'framer-motion'

export default function Login({ userInfo, setUserInfo }) {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const handleLogin = async () => {

        const q = query(
            collection(database, "users"),
            where("data.username", "==", user)
        )
        const p = query(
            collection(database, "users"),
            where("data.email", "==", user)
        )

        const querySnapshotQ = await getDocs(q);
        if (querySnapshotQ._snapshot.docChanges.length !== 0) {
            querySnapshotQ.forEach((doc) => {
                setUserInfo(doc.data().data);
                console.log(doc.data().data)
                if (doc.data().data.password === pass) {
                    navigate("/")
                }
            });
            // if (userInfo.password === pass) {
            //     navigate("/")
            // }
        }

        const querySnapshotP = await getDocs(p);
        if (querySnapshotP._snapshot.docChanges.length !== 0) {
            querySnapshotP.forEach((doc) => {
                setUserInfo(doc.data().data);
                console.log(doc.data().data)
                if (doc.data().data.password === pass) {
                    navigate("/")
                }
            });
        }
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])


    return (
        <>
            {
                loading ?
                    <Spinner loading={loading} />
                    :
                    <motion.div className='form-container' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ y: window.innerWidth }} transition={{ duration: 0.6 }}>
                        <div className="logo signup-logo">
                            <img onClick={() => { navigate("/") }} src={logo} alt="" />
                        </div>
                        <div className="signin-signup" id="login">
                            <form action="" className="signin-form" id="sign-in">
                                <h1>Sign in</h1>
                                <div className="form-control">
                                    <i className="fas fa-user"></i>
                                    <input className="input-text" type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Username or Email" />
                                </div>
                                <div className="form-control">
                                    <i className="fas fa-lock"></i>
                                    <input className="input-text" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" />
                                </div>

                                <div className="login-btn">
                                    <button className="btn" type='button' onClick={handleLogin}>Login</button>
                                </div>
                                <div className="guest-btn">
                                    <button className="btn" type='button'>Guest User Credentials</button>
                                </div>

                                <div className="platforms">
                                    <h5>New to Shoez?</h5>
                                    <div className="create-btn">
                                        <button className="btn" onClick={() => navigate("/Signup")}>Create your Shoez Account</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <Link className='link' to="/">
                Back to Home?
            </Link> */}
                    </motion.div>
            }
        </>
    )
}
