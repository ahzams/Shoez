import React, { useEffect, useState } from 'react'
import { database } from '../firebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore";
import Descard from './Descard'
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Spinner from './Spinner';
import { motion } from 'framer-motion';

export default function Description({ userInfo, count, setCount, page }) {

    const { id } = useParams()
    // console.log(id)
    const [desc, setDesc] = useState([])
    const [loading, setLoading] = useState(false)

    // const fetchDesc = async () => {
    //     const querySnapshot = await getDocs(collection(database, "shoesdescription"));
    //     const array = []
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         // console.log(doc.id, " => ", doc.data());
    //         array.push(doc.data().data)
    //     });
    //     setDesc(array)
    //     // setShoes([...shoes, airMax])
    // }

    const fetchDesc = async () => {
        const q = query(
            collection(database, "shoesdescription"),
            where("id", "==", id)
        );

        const querySnapshot = await getDocs(q);
        const array = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //   console.log(doc.id, " => ", doc.data());
            array.push(doc.data().data)
        });
        setDesc(array)
    }

    useEffect(() => {
        fetchDesc()
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
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }} transition={{ duration: 0.6 }}>
                        <Navbar count={count} userInfo={userInfo} page={page} />
                        {
                            desc && desc.map((element, i) => {
                                return <Descard id={id} userInfo={userInfo} key={i} imageArray={element.images} shoename={element.name} sizeArray={element.sizes} count={count} setCount={setCount} />
                            })
                        }
                        <Footer />
                    </motion.div>
            }
        </>
    )
}
