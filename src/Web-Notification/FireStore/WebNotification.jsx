import React, { useRef, useState, useEffect } from "react";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { getTokenFunc, onMessageListener } from "./FireBase";
import { Toaster, toast } from "react-hot-toast";

const WebNotification = () => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setIsTokenFound] = useState(false);
  const toastRef = useRef(null);
  getTokenFunc(setIsTokenFound);
  // deleteTokenFunc(setIsTokenFound)
  onMessageListener()
    .then((payload) => {
      console.log("payload>>", payload);
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      // toast.success(`${payload?.notification?.title}: ${payload?.notification?.body}`, {
      //   duration: 60000,
      //   position: 'top-right',
      // });
      //   Push.create("heeloo", {
      //     body: payload.notification.body,
      //     icon: '/icon.png',
      //     timeout: 4000,
      //     onClick: function () {
      //         window.focus();
      //         this.close();
      //     }
      // });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  // const toastRefbtnClick = () => {
  //   console.log("function called>>", toastRefbtn);
  // };

  // useEffect(() => {
  //   const unsubscribe = onMessageListener().then((payload) => {
  //     setShow(true);
  //     setNotification({
  //       title: payload?.notification?.title,
  //       body: payload?.notification?.body,
  //     });
  //     // toast.success(
  //     //   `${payload?.notification?.title}: ${payload?.notification?.body}`,
  //     //   {
  //     //     duration: 60000,
  //     //     position: "top-right",
  //     //   }
  //     // );
  //   });
  //   return () => {
  //     unsubscribe.catch((err) => console.log("failed: ", err));
  //   };
  // }, []);
  return (
    // <div className="card flex justify-content-center">
    //   {isTokenFound && <h1>Notification permission enabled...</h1>}
    //   {!isTokenFound && <h1>Need notification permission.. </h1>}
    // </div>
    <div
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <img src="..." className="rounded mr-2" alt="..." />
        <strong className="mr-auto">{notification.title}</strong>
        <small className="text-muted">just now</small>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">{notification.body} </div>
    </div>
  );
};

export default WebNotification;
