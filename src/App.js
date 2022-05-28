import "./styles/app.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./state/StateProvider";

function App() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads... it's a listener
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in/ the was user logged in
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
  useEffect(() => {}, [state.cart]);
  // BEM convention. We use two underscore in classnames for this.
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]}></Route>
          <Route path="/checkout" element={[<Header />, <Checkout />]}></Route>
          <Route path="/payment" element={[<Header />, <Payment />]}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/orders" element={[<Header />, <Orders />]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
