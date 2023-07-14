import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

const About = () => {
  const [email, setEmail] = useState("");

  return (
    <div id="emailCom">
      <label className="inputLabel">Email:</label>
      <span className="p-float-label">
        <InputText
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="allInput"
        />
        <label htmlFor="email">Email</label>
      </span>{" "}
    </div>
  );
};

export default About;
