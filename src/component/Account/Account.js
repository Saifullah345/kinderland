import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { Form } from "react-bootstrap";
import "./Account.css";
import axios from "axios";
import { FormControl } from "react-bootstrap";

const Account = () => {
  const [name, setName] = useState("");
  // setName(response.data)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [gender2, setGender2] = useState("");
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    {
      /* <h1>{name.number}</h1> */
    }
    axios
      .get("https://comcodekindler.herokuapp.com/register", {
        name: name,
        email: email,
        password: password,
        cpassword: cpassword,
        phone: phone,
        gender: gender,
        gender2: gender2,
      })
      .then((response) => {
        console.log(response);
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(phone);
        console.log(gender);
        console.log(gender2);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });

    history.push("login");
  }
  return (
    <div>
      <div className="container-fluid bg w-100">
        <div className="for-center text-center ">
          <h1 className="text-black mb-5">Signup</h1>
          <Form>
            <Form.Control
              style={{
                background: "transparent",
              }}
              className="input py-2 my-2"
              placeholder="Name"
              type="name"
              name="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Form.Control
              style={{
                background: "transparent",
              }}
              className="input py-3 my-2"
              placeholder="Email"
              type="email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Control
              style={{
                background: "transparent",
              }}
              className="input py-3 my-2"
              placeholder="Password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Form.Control
              style={{
                background: "transparent",
              }}
              className="input py-3 my-2"
              placeholder="ConfirmPassword"
              type="password"
              name="cpassword"
              onChange={(e) => setCpassword(e.target.value)}
              required
            />
            <Form.Control
              style={{
                background: "transparent",
              }}
              className="input py-3 my-2"
              placeholder="Phone No"
              type="number"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <div className="my-2 d-flex justify-content-start">
              <input
                style={{
                  background: "transparent",
                }}
                type="radio"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              />
              &nbsp; Male &nbsp;
              <input
                style={{
                  background: "transparent",
                  color: "white",
                }}
                type="radio"
                name="gender"
                onChange={(e) => setGender2(e.target.value)}
              />{" "}
              &nbsp; Female
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn-block"
              style={{
                backgroundColor: "rgba(79, 99, 103, 1)",
                color: "white",
                height: "55px",
                border: "0px solid none",
                borderRadius: "8px",
              }}
            >
              <strong
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Sumbit
              </strong>
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Account;
