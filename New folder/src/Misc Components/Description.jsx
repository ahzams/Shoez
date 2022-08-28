import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { database } from '../firebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore";
import Descard from './Descard'
import { useParams } from 'react-router-dom';

export default function Description({count,setCount}) {

    const { id } = useParams()
    // console.log(id)
    const [desc, setDesc] = useState([])

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
    }, [])

    return (
        <div>
            {/* <h1>{JSON.stringify(name)}</h1>
            <h1>{JSON.stringify(id)}</h1> */}
            <Navbar count={count} />
            {
                desc && desc.map((element, i) => {
                    return (
                      <Descard
                        id={id}
                        key={i}
                        imageArray={element.images}
                        shoename={element.name}
                        sizeArray={element.sizes}
                        count={count}
                        setCount={setCount}
                      />
                    );
                })
            }
            <Footer />
        </div>
    )
}
