import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import Main from "./Components/Main";
import Shop from "./Components/Shop";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Description from "./Misc Components/Description";
import Addtocart from "./Misc Components/Addtocart";
import { database } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
// import Otp from './Misc Components/Otp';

function App() {
  const [page, setPage] = useState("Home");
  const [verify, setVerify] = useState(false);
  const [shoes, setShoes] = useState([]);
  const [airMax, setAirMax] = useState([]);
  const [nikeDunk, setNikeDunk] = useState([]);
  const [airForce, setAirForce] = useState([]);
  const[count,setCount]=useState(0);

  const cartsize=async()=>{
     const querySnapshot = await getDocs(collection(database, "cart"));
     var r = querySnapshot._snapshot.docChanges.length;
     setCount(r);
  }

  const fetchShoes = async () => {
    const querySnapshot = await getDocs(collection(database, "shoesdatabase"));
    const array = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      array.push(doc.data().item);
    });
    setShoes(array);
    // setShoes([...shoes, airMax])
  };

  const fetchAirMax = async () => {
    const querySnapshot = await getDocs(
      collection(database, "airmax")
    );
    const array = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      array.push(doc.data().data);
    });
    setAirMax(array);
    // setShoes([...shoes, airMax])
  };

  const fetchNikeDunk = async () => {
    const querySnapshot = await getDocs(collection(database, "nikedunk"));
    const array = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      array.push(doc.data().data);
    });
    setNikeDunk(array);
    // setShoes([...shoes, nikeDunk])
  };

  const fetchAirForce = async () => {
    const querySnapshot = await getDocs(collection(database, "airforce"));
    const array = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      array.push(doc.data().data);
    });
    setAirForce(array);
    // setShoes([...shoes, airForce])
  };

  useEffect(() => {
    fetchShoes();
    fetchAirForce();
    fetchAirMax();
    fetchNikeDunk();
    cartsize();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Login" element={<Login />} />
        <Route
          exact
          path="/Signup"
          element={<Signup verify={verify} setVerify={setVerify} />}
        />
        {/* <Route exact path="/Otp" element={<Otp verify={verify} setVerify={setVerify} />} /> */}
        <Route
          exact
          path="/"
          element={<Main count={count} page={page} setPage={setPage} />}
        />
        <Route
          exact
          path="/Shop"
          element={
            shoes && (
              <Shop
                page={page}
                count={count}
                setPage={setPage}
                shoes={shoes}
                airMax={airMax}
                nikeDunk={nikeDunk}
                airForce={airForce}
              />
            )
          }
        />
        <Route
          exact
          path="/Desc/:id"
          element={<Description count={count} setCount={setCount} />}
        />
        <Route
          exact
          path="/Cart"
          element={<Addtocart count={count} setCount={setCount} />}
        />
        <Route
          exact
          path="/Gallery"
          element={<Gallery page={page} setPage={setPage} count={count} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
