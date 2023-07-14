// import { Button } from "primereact/button";
// import { InputText } from "primereact/inputtext";
// import React, { useState } from "react";
// import { Notifications } from "react-push-notification";
// import addNotification from "react-push-notification";
// import getTokenFunc from './FireStore/FireBase'
// const Notification = () => {
//   const [name, setName] = useState("");
//   const [isTokenFound, setTokenFound] = useState(false);
//   // getTokenFunc(setTokenFound)
//   console.log("", addNotification);

//   const warningNotification = () => {
//     console.log("", addNotification);
//     addNotification({
//       title: "warning",
//       subtitle: "Invalid Username !",
//       message: "You have to enter name",
//       theme: "red",
//       closeButton: "X",
//     });
//   };

//   const successNotification = () => {
//     console.log("", addNotification);
//     addNotification({
//       title: "success",
//       subtitle: "Form Submited SuccessFully !",
//       message: "Welcome to our website",
//       backgroundTop: "green",
//       backgroundBottom: "yellowgreen",
//       closeButton: "X",
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name === "") {
//       warningNotification();
//     } else {
//       successNotification();
//     }
//   };
//   return (
//     <div>
//       <Notifications />
//       <form>
//         <label id="name">
//           Enter Name
//           <InputText
//             type="text"
//             id="name"
//             value={name}
//             placeholder="Enter Your Name Here..."
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//           <Button type="submit" label="Submit" onClick={handleSubmit} />
//         </label>
//       </form>
//     </div>
//   );
// };

// export default Notification;
