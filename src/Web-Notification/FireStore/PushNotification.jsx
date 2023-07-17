import React from "react";
import  Push from 'push.js';
const PushNotification = () => {
//   // Push.create('Hello World!')
//   Push.create("Hello world!", {
//     body: "How's it hangin'?",
//     icon: '/icon.png',
//     timeout: 4000,
//     onClick: function () {
//         window.focus();
//         this.close();
//     }
// });
var promise = Push.create('Hello World!');
console.log("Push>>",Push)

promise.then(function(notification) {
  console.log("notification>>",notification)
    notification.close();
});

  return <div>Push</div>;
};

export default PushNotification;
