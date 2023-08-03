import React from "react";

//async function are return a promise

const AsyncAndAwait = () => {
  // const getData = async () => {
  //   let data = await "data Loaded..";
  //   console.log("data>>>", data);
  //   return data;
  // };
  // getData().then((data) => console.log("data2>>>", data));
  // console.log("11111");
  // console.log("22222");
  const asynchronouns_Function = () => {
    const first_Promise = new Promise((resolve, reject) =>
      resolve("first_Promise")
    );
    const second_Promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("second_Promise");
      }, 2000);
    });
    let combine_promise = Promise.all([first_Promise, second_Promise]);

    return combine_promise;
  };
  const delay = async () => {
    let data = await asynchronouns_Function();
    console.log("data>>", data);
    console.log("data2>>>>>");

  };

  delay();
  return <div>AsyncAndAwait</div>;
};


export default AsyncAndAwait;