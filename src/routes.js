import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { setUserInfo, setIsLoggedIn } from "./store/reducers/userReducer";
import { useSelector, useDispatch } from "react-redux";

import SignIn from "./Pages/Authentication/Signin";
import SignUp from "./Pages/Authentication/Signup";
import Home from "./Pages/Home/Home";
import FlightDetails from "./Pages/FlightDetails/FlightDetails";
import BookNow from "./Pages/BookNow/BookNow";
import PaymentScreen from "./Pages/PaymentScreens/PaymentScreen";
import TicketScreen from "./Pages/TicketScreen/TicketScreen";

const CustomRoutes = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();
    
  const getUserData = () => {
    const userInfoData = localStorage.getItem("USER_INFO")
    const isLogIn = localStorage.getItem("IS_LOGIN");

    if(isLogIn && userInfoData){
        dispatch(setIsLoggedIn(isLogIn));
        dispatch(setUserInfo(JSON.parse(userInfoData)))
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Router>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/flightDetails" element={<FlightDetails />} />
            <Route path="/flightDetails/bookNow" element={<BookNow />} />
            <Route
              path="/flightDetails/bookNow/payNow"
              element={<PaymentScreen />}
            />
            <Route path="/ticketDetails" element={<TicketScreen />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default CustomRoutes;
