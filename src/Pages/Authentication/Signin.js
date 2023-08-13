import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Footer from "../constants/Footer";
import Header from "../constants/Header";

import { setUserInfo, setIsLoggedIn } from "../../store/reducers/userReducer";
import { useSelector, useDispatch } from "react-redux";


//use selector = for reading the data in redux
// use dispatch = for updating the data in redux
function SignIn() {
  return (
    <div style={{ display: "block" }}>
      <Header />
      <BodyComponent />
      <Footer />
    </div>
  );
}

const styles = {
  inputContainer:
    " h-12 w-[20rem] box-border bg-white border border-gray-700 rounded-lg mt-3 mr-3 p-3  font-light font-sans text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-xl mb-4 p-3",
};

function BodyComponent() {
  return (
    <>
      {/* signUpBody  */}
      <div>
        <div className=" w-1/2 mt-32 flex flex-col  items-center m-auto">
          <p className="sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-[#333356] font-extrabold font-sans mb-8">
            Sign In
          </p>
          <p className="font-thin sm:text-base md:text-lg lg:text-xl xl:text-lg font-sans">
            Adventure awaits, and the world needs curious souls to discover its
            wonders
          </p>
        </div>
        <FormDataComponent />
      </div>
    </>
  );
}

function FormDataComponent() {
  // reading redux data
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log("userInfo", userInfo);
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(email, " " + password);

    try {
      console.log("In try part");

      let bodyContent = JSON.stringify({
        email: email,
        password: password,
      });

      let response = await axios.post(
        "http://localhost:8080/login",
        bodyContent,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response.status === 200) {
        console.log(response)
        console.log(JSON.stringify(response.data));
        dispatch(setUserInfo(response.data));
        console.log("user info after update", userInfo)
        dispatch(setIsLoggedIn(true));
        navigate("/home");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {/* formContainer */}
      <div className="flex flex-col  items-center justify-center mt-7 mb-12 p-3">
        <form onSubmit={() => { }}>
          <div className=" xl:w-[48.75rem] xl:flex  sm:flex sm:flex-col sm:justify-center sm:items-center xl:justify-center xl:items-center">
            {/* inputContainer */}
            <input
              className={styles.inputContainer}
              autoComplete="on"
              required
              placeholder="Email id"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            {/* inputContainer */}
            <input
              className={styles.inputContainer}
              required
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="w-full flex  p-3 items-center justify-center ">
            <Button
              variant="contained"
              type="submit"
              style={{
                color: "white",
                backgroundColor: "#FD8D14",
                textTransform: "none",
                paddingRight: "5rem",
                paddingLeft: "5rem",
                fontSize: "1.375rem",
                borderRadius: "1rem",
                fontWeight: "bold",
              }}
              onClick={handleSignIn}
            >
              Sign in
            </Button>
          </div>
        </form>
        {/* <br /> */}
        <p>
          Don't have an account ?
          <span
            className="text-blue-400 text-lg cursor-pointer "
            onClick={() => {
              navigate("/signup")
              // handleSignIn
            }}
          >
            {" "}
            Sign up
          </span>
        </p>
      </div>
    </>
  );
}

export default SignIn;
