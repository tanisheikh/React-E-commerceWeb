import React, { useState } from "react";
import { Password } from "primereact/password";

const FormJavaScript = () => {
  const values = [
    {
      username: "",
      email: "",
      phone: "",
      password: "",
      textArea: "",
      hobbies: "",
      gender: "",
      image: "",
    },
  ];
  const allValues = values[0];
  const [value, setValue] = useState(allValues);
  console.log("value>>>", value);

  const formSubmitFun =(e)=>{
console.log("Event value>>",e)
console.log("function Called")
console.log("value>>",value)
e.preventDefault()
  }
  return (
    <div className="container">
      <form onSubmit={formSubmitFun} > 
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="Username"
                placeholder="Enter Your Username"
                value={value.username}
                onChange={(e) => setValue({ username: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={value.email}
                onChange={(e) => setValue({ email: e.target.value })}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                value={value.phone}
                onChange={(e) => setValue({ phone: e.target.value })}
                placeholder="(999) 999-9999"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="Password"
                className="form-control"
                id="Password"
                value={value.password}
                onChange={(e) => setValue({ Password: e.target.value })}
                placeholder="Enter Your Password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textArea" className="form-label">
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="textArea"
                value={value.textArea}
                onChange={(e) => setValue({ textArea: e.target.value })}
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormJavaScript;
