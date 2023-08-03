//Network Url :http://192.168.0.109:3000

import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
// import Form from "./Form/Form";
// import FormJavaScript from "./Form/FormJavaScript";
// import AboutMeFile from "./Form2/AboutMeFile";
// import FormHr from "./Form/FormHr";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Home from "./React Com/Home";
// import About from "./React Com/About";
// import Contact from "./React Com/Contact";
// import Notification from "./Web-Notification/Notification";
// import WebNotification from "./Web-Notification/FireStore/WebNotification";
// import PushNotification from './Web-Notification/FireStore/PushNotification';
import React_Query_Ex from "./React_Query/React_Query_Ex";
import ToasterDemo from "./React_Query/Toaster-Demo";
import UseReducerwithuseContextEx from "./useContextWithuseReducer/UseReducerwithuseContextEx";
import Com1 from "./useContextWithuseReducer/Com1";
import AsyncAndAwait from './AsycAndAwit/AsyncAndAwait'
const App = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   driver.defineSteps([
  //     {
  //       element: "#usernameCom",
  //       popover: {
  //         // className: "popOver",
  //         title: "username",
  //         description: "firstElement show",
  //         position: "right-center",
  //         prevBtnText: "Back",
  //         nextBtnText: "Next",
  //       },
  //       onNext: () => {
  //         // driver.preventMove()
  //         //  setTimeout(()=>{
  //         //     driver.moveNext()
  //         //   },1000)
  //         <Redirect push to="/about" />

  //         // navigate("/about");

  //         driver.moveNext();
  //       },
  //     },
  //     {
  //       element: "#emailCom",
  //       popover: {
  //         // className: "popOver",
  //         title: "email",
  //         description: " email ",
  //         position: "right-center",
  //         prevBtnText: "Back",
  //         nextBtnText: "Next",
  //       },
  //       onNext: () => {
  //         // driver.preventMove()
  //         //  setTimeout(()=>{
  //         //     driver.moveNext()
  //         //   },1000)
  //         // navigate("/contact");
  //         <Redirect push to="/contact" />

  //         driver.moveNext();
  //       },
  //       onPrevious: () => {
  //         // driver.preventMove()
  //         //  setTimeout(()=>{
  //         //     driver.moveNext()
  //         //   },1000)
  //         navigate("/");
  //         driver.preventMove();
  //       },
  //     },
  //     {
  //       element: "#phoneCom",
  //       popover: {
  //         title: "phone",
  //         description: "phone ",
  //         position: "right-center",
  //         prevBtnText: "Back",
  //         nextBtnText: "Next",
  //       },
  //       onPrevious: () => {
  //         // driver.preventMove()
  //         //  setTimeout(()=>{
  //         //     driver.moveNext()
  //         //   },1000)
  //         navigate("/about");
  //         driver.preventMove();
  //       },
  //     },
  //   ]);
  //   driver.start();
  // }, []);

  return (
    <div>
      {/* <UseReducerwithuseContextEx>
        <Com1 />
      </UseReducerwithuseContextEx> */}
    <AsyncAndAwait/>
      {/* <Form/> */}
      {/* <Notification/> */}
      {/* <WebNotification/> */}
      {/* <PushNotification/> */}
      {/* <ToasterDemo /> */}
      {/* <React_Query_Ex /> */}
      {/* <Toster /> */}
      {/* <AboutMeFile/> */}
      {/* <FormJavaScript/> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
};

export default App;
