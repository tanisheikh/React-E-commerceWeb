import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

const Contact = () => {
  const [phone, setPhone] = useState("");
  return (
    <div id="phoneCom">
      <label className="inputLabel">phone:</label>
      <span className="p-float-label">
        <InputText
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className="allInput"
        />
        <label htmlFor="username">phone</label>
      </span>{" "}
    </div>
  );
};

export default Contact;
