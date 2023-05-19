import './App.css';
import {Routes,Route} from "react-router-dom"
import Header from "./Component/Header/Header"
import Home from "./Component/Home/Home"
import CheckOut from './Component/CheckOut/CheckOut';
import Login from './Component/Login/Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Component/Payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Component/Orders/Orders';
const promise = loadStripe(
  "pk_test_51N1ClXGCqlMRJLxHMuMnZncYBLPm2QsiN6bMOBEzryOWBPFfaoo8OX68FMEa5xHAWAodxhJoM5tNuN0yqA75fIhO00zZtrHM2H"
);

function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        // console.log("THE USER IS >>> ", authUser);
        if (authUser) {
          // the user just logged in / the user was logged in

          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/login" element={<Login />} />
       
          <Route path="/payment" element={ <Elements stripe={promise}> <Payment /> </Elements>} />
        <Route path="/orders" element={<Orders />} />
       
      </Routes>
    </>
  );
}

export default App;
