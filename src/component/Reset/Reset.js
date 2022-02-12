import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { FormControl } from "react-bootstrap";

const Reset = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("", {
        password: password,
        cpassword: cpassword,
      })
      .then((response) => {
        console.log(response);
        console.log(password);
        console.log(cpassword);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  }
  return (
    <div>
      <div className="container-fluid bg w-100 h-100">
        <div className="for-center text-center ">
          <h1 className="text-black mb-5">Login</h1>
          <Form onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="btn-block my-2"
              onClick={handleSubmit}
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

export default Reset;
