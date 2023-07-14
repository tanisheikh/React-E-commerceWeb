import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");

  return (
    <div id="usernameCom">
      <label className="inputLabel">Username:</label>
      <span className="p-float-label">
        <InputText
          id="username"
          name="username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="allInput"
        />
        <label htmlFor="username">Username</label>
      </span>{" "}
    </div>
  );
};

export default Home;
