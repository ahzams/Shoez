import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from './Components/Gallery';
import Main from "./Components/Main";
import Shop from "./Components/Shop";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Description from './Misc Components/Description';
import Addtocart from './Misc Components/Addtocart';
import { database } from './firebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import About from './Components/About';
import Spinner from './Misc Components/Spinner';
import { AnimatePresence } from 'framer-motion';

function App() {

  const [page, setPage] = useState('Home')
  const [verify, setVerify] = useState(false)
  const [shoes, setShoes] = useState([])
  const [airMax, setAirMax] = useState([])
  const [nikeDunk, setNikeDunk] = useState([])
  const [airForce, setAirForce] = useState([])
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState()
  const [loading, setLoading] = useState(false)

  const cartSize = async () => {
    let cartName = userInfo ? userInfo.username : "guest123"
    const querySnapshot = await getDocs(collection(database, cartName));
    let r = querySnapshot._snapshot.docChanges.length;
    setCount(r);
  }

  const fetchShoes = async () => {
    const querySnapshot = await getDocs(collection(database, "shoesdatabase"));
    const array = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      array.push(doc.data().data)
    });
    setShoes(array)
    // setShoes([...shoes, airMax])
  }

  const fetchAirMax = async () => {
    const querySnapshot = await getDocs(collection(database, "airmax"));
    const array = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      array.push(doc.data().data)
    });
    setAirMax(array)
    // setShoes([...shoes, airMax])
  }

  const fetchNikeDunk = async () => {
    const querySnapshot = await getDocs(collection(database, "nikedunk"));
    const array = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      array.push(doc.data().data)
    });
    setNikeDunk(array)
    // setShoes([...shoes, nikeDunk])
  }

  const fetchAirForce = async () => {
    const querySnapshot = await getDocs(collection(database, "airforce"));
    const array = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      array.push(doc.data().data)
    });
    setAirForce(array)
    // setShoes([...shoes, airForce])
  }

  useEffect(() => {
    fetchShoes()
    fetchAirMax()
    fetchAirForce()
    fetchNikeDunk()
    cartSize()
  }, [userInfo])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  // console.log("App" + cart)

  return (
    <BrowserRouter>
      {/* {
        loading ?
          <Spinner loading={loading} />
          : */}
          <AnimatePresence>
            <Routes>
              <Route exact path="/Login" element={<Login userInfo={userInfo} setUserInfo={setUserInfo} />} />
              <Route exact path="/Signup" element={<Signup verify={verify} setVerify={setVerify} />} />
              <Route exact path="/" element={<Main count={count} userInfo={userInfo} page={page} setPage={setPage} />} />
              <Route exact path="/Shop" element={<Shop count={count} userInfo={userInfo} page={page} setPage={setPage} shoes={shoes} setShoes={setShoes} airMax={airMax} nikeDunk={nikeDunk} airForce={airForce} />} />
              <Route exact path="/Desc/:id" element={<Description userInfo={userInfo} count={count} setCount={setCount} page={page} />} />
              <Route exact path="/Cart" element={<Addtocart userInfo={userInfo} count={count} setCount={setCount} />} />
              <Route exact path="/Gallery" element={<Gallery count={count} userInfo={userInfo} page={page} setPage={setPage} />} />
              <Route exact path="/About" element={<About count={count} userInfo={userInfo} page={page} setPage={setPage} />} />
            </Routes>
          </AnimatePresence>
      {/* } */}
    </BrowserRouter>
  );
}

export default App;
