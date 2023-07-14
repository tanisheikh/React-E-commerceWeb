import React, { useState, useEffect } from "react";
import { useFormik, Field } from "formik";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import { InputMask } from "primereact/inputmask";
import { Password } from "primereact/password";
import image from "./images/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
import "./form.css";
import "./driver.css";

import * as Yup from "yup";
import { driver } from "driver.js";

const Form = () => {
  let imageDefaultPath = image;
  const images = [{ image: "" }];
  const genderList = [
    { name: "Male", key: "M" },
    { name: "Female", key: "F" },
  ];
  const hobbiesList = [
    { name: "Swimming", key: "S" },
    { name: "Driving", key: "D" },
    { name: "Cycling", key: "C" },
    { name: "Reading", key: "R" },
  ];
  const [selectedGender, setSelectedGender] = useState({});
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [imagefile, setImagefile] = useState(images);
  const driverCom = driver({
    nextBtnText: "Next",
    prevBtnText: "Back",
    doneBtnText: "Done",
    showProgress: true,
    onPopoverRender: (popover, { config, state }) => {
      console.log("config>>", config);
      console.log("state>>", state);

      const div = document.createElement("div");
      const checkbox = document.createElement("INPUT");
      checkbox.type = "checkbox";
      checkbox.id = "checkBoxId";
      checkbox.classList.add("CheckBox");
      const label = document.createElement("label");
      label.appendChild(checkbox);
      label.htmlFor = "checkBoxId";
      const text = document.createElement("text");
      const newContent = document.createTextNode("Don't ask me again.");
      text.appendChild(newContent);
      label.appendChild(text);
      div.classList.add("driver-popover-checkbox");
      div.appendChild(label);
      popover.wrapper.appendChild(div);
    },

    steps: [
      {
        element: "#username",
        popover: {
          popoverClass: "popoverCustom ",
          title: "username",
          description: "firstElement show",
          align: "center",
          side: "right",
        },
      },
      {
        element: "#email",
        popover: {
          popoverClass: "popoverCustom",
          title: "email",
          description: " email ",
          align: "center",
          side: "right",
        },
      },
      {
        element: "#phone",
        popover: {
          popoverClass: "popoverCustom doneBtn ",
          title: "email",
          description: " email ",
          align: "center",
          side: "right",
        },
      },
    ],
  });

  driverCom.drive();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      hobbiesInterest: selectedHobbies,
      gender: selectedGender,
      fileImage: imageDefaultPath,
      textArea: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Please Enter your Username")
        .max(35)
        .matches(
          /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
          "Invalid UserName"
        ),
      email: Yup.string()
        .required("Please Enter your Email")
        .max(55)
        .matches(
          /^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/gim,
          "Invalid EmailId"
        ),
      phone: Yup.string()
        .required("Please Enter your Phone Number")
        .min(10)
        .matches(/^(\+91|\+91\-|0)?[789]\d{9}$/, "Invalid phoneNumber"),
      password: Yup.string().required("Please Enter your Password").min(8),
      // .matches(
      //   "[0-9A-Za-z.@]+:[0-z]+",
      //   "Invalid password (Minimum eight characters, at least one letter, one number and one special character"
      // ),
    }),

    onSubmit: (values, { resetForm }) => {
      debugger;
      // console.log("formIkInitialValue", formik.initialValues);
      resetForm({ values: formik.initialValues });
      // console.log("values>>>", values);
      // console.log("valueobj>>",{ values: formik.initialValues })
      console.log("resetForm>>", formik.resetForm);
      console.log("value>>>", values);
    },
  });
  console.log("formik>>>", formik);

  // handleSubmitFun()
  // console.log("valuesinitial>>",values)
  // formik.setFieldValue("username",'')
  // formik.setFieldValue("email",'')
  // formik.setFieldValue("phone",'')
  // formik.setFieldValue("password",'')
  // formik.setValues({ values: { ...formik.initialValues } });
  // formik.setFieldValue("hobbiesInterest",'' );
  // formik.setFieldValue("gender", '');
  // formik.setFieldValue("fileImage", imageDefaultPath);
  // console.log("valuesinitial>>", values);
  // resetForm();

  const onHobbiesChange = (e) => {
    let _hobbies = [...selectedHobbies];

    if (e.checked) _hobbies.push(e.value);
    else _hobbies.splice(_hobbies.indexOf(e.value), 1);

    setSelectedHobbies(_hobbies);
    formik.setFieldValue("hobbiesInterest", _hobbies);
  };

  const onGenderChange = (e) => {
    let _gender = e.value;
    console.log(" _gender>>", _gender);
    setSelectedGender(_gender);
    formik.setFieldValue("gender", _gender);
  };
  const uploadImageHandler = (e) => {
    console.log("imagUrl>>", e.target.files);
    console.log("uploadImageHandler called>>");
    let _imageUrl = imagefile;
    _imageUrl[0].image = URL.createObjectURL(e.target.files[0]);
    setImagefile([..._imageUrl]);
    console.log("imagefile>>", imagefile);
    formik.setFieldValue("fileImage", _imageUrl[0].image);
  };

  const deleteImageHandler = () => {
    let _imageUrlDelete = imagefile;
    _imageUrlDelete[0].image = imageDefaultPath;
    setImagefile([..._imageUrlDelete]);
    console.log("imagefile>>", imagefile);
    formik.setFieldValue("fileImage", _imageUrlDelete[0].image);
  };
  const handleSubmitFun = () => {
    formik.setValues({ values: formik.initialValues });
  };
  return (
    <div className="container">
      <Card className="cardCom">
        <h1 className="title_Btn">SignUp</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col divinput">
              <label className="inputLabel">Username:</label>
              <span className="p-float-label">
                <InputText
                  id="username"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  className="allInput"
                />
                <label htmlFor="username">Username</label>
              </span>
              <span className="errorMsg">
                {" "}
                {formik.touched.username && formik.errors.username ? (
                  <div>{formik.errors.username}</div>
                ) : null}
              </span>
            </div>
            <div className="col divinput">
              <label className="inputLabel">Email:</label>
              <span className="p-float-label">
                <InputText
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="allInput"
                />
                <label htmlFor="email">Email</label>
              </span>
              <span className="errorMsg">
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col divinput">
              <label className="inputLabel">Phone Number:</label>
              <span className="p-float-label">
                <InputMask
                  id="phone"
                  name="phone"
                  unmask="true"
                  mask="(999) 999-9999"
                  placeholder="(999) 999-9999"
                  value={formik.values.phone}
                  onChange={(e) => {
                    formik.setFieldValue("phone", e.target.value);
                  }}
                  className="allInput"
                ></InputMask>
                <label htmlFor="phone">Phone Number</label>
              </span>
              <span className="errorMsg">
                {formik.touched.phone && formik.errors.phone ? (
                  <div>{formik.errors.phone}</div>
                ) : null}
              </span>
            </div>
            <div className="col divinput">
              <label className="inputLabel" htmlFor="password">
                Password:
              </label>
              <span className="p-float-label">
                <Password
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="allInput"
                  feedback={false}
                  toggleMask
                />
                <label htmlFor="password">Password</label>
              </span>
              <span className="errorMsg">
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col divinput genderDiv">
              <label className="inputLabel mb-2">About your Self:</label>
              <InputTextarea
                id="textArea"
                name="textArea"
                value={formik.values.textArea}
                onChange={formik.handleChange}
                className="textArea allInput"
                rows={3}
                cols={20}
              />
            </div>
            <div className="col divinput">
              <lable className="">Hobbies:</lable>
              <div className="hobbiesDiv">
                {hobbiesList.map((hobbies) => {
                  return (
                    <div key={hobbies.key} className="flex align-items-center">
                      <Checkbox
                        inputId={hobbies.key}
                        name="category"
                        value={hobbies}
                        onChange={onHobbiesChange}
                        checked={selectedHobbies.some(
                          (item) => item.key === hobbies.key
                        )}
                        className="mb-2"
                      />
                      <label htmlFor={hobbies.key} className="ml-2 mb-2">
                        {hobbies.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col  genderDiv divinput">
            <label className="mr-2">Gender:</label>

            {genderList.map((gender) => {
              return (
                <div key={gender.key} className="flex align-items-center">
                  <RadioButton
                    inputId={gender.key}
                    name="category"
                    value={gender}
                    onChange={onGenderChange}
                    checked={selectedGender.key === gender.key}
                  />
                  <label htmlFor={gender.key} className="ml-2 mr-4">
                    {gender.name}
                  </label>
                </div>
              );
            })}
          </div>

          <div className="genderDiv">
            <label className="ImageLabel">Upload Image:</label>

            <Avatar
              image={formik.values.fileImage}
              size="xlarge"
              shape="circle"
              className="avtarImage"
            />

            <InputText
              type="file"
              id="fileImage"
              // value={formik.values.fileImage}
              onChange={uploadImageHandler}
              accept="image/png,image/jpg"
              className="imageInput"
            />
            {imagefile[0].image ? (
              <Button
                icon="pi pi-trash"
                type="button"
                onClick={deleteImageHandler}
                className="deleteBtn"
              />
            ) : null}
          </div>

          <Button
            type="submit"
            label="Submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className="title_Btn mt-2"
          />
          <i class="fa fa-thin fa-arrow-right"></i>
          {/* <Button
            type="button"
            label="Reset"
            // disabled={!formik.isValid || formik.isSubmitting} toggleMask
            onClick={() => formik.handleReset}
          /> */}
        </form>
      </Card>
    </div>
  );
};

export default Form;
