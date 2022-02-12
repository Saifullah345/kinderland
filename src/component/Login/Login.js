import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const Login = () => {
  const [values, setValues] = useState({});
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    PostApi();
    // setdone(true);
  };
  const handleChange = (e) => {
    e.persist();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const PostApi = () => {
    axios
      .post("/login", {
        email: values.email,
        passsword: values.password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setTimeout(() => {
            history.push(`/Sidebar`);
            console.log(values.email);
            console.log(values.passsword);
            console.log(response.status);
          }, 100);
        }
      })
      .catch((err) => {
        console.log(err.respone);
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container-fluid bg w-100 h-100">
        <div className="for-center text-center  ">
          <h1 className="text-black mb-5 my-1">Login</h1>
          <Form className="form w-100 h-100">
            <Form.Group
              size="lg"
              className="mb-3"
              controlId="validationformBasicEmail"
            >
              <Form.Control
                size="lg"
                type="email"
                placeholder="Email"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="validationformBasicPassword"
            >
              <Form.Control
                size="lg"
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationformBasicForgot">
              <a className="mb-4" style={{ float: "right", color: "white" }}>
                ForgotPassword?
              </a>
            </Form.Group>

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
            <Form.Group className="mb-3" controlId="validationformBasicSignup">
              <a className="my-2 " style={{ float: "left", color: "white" }}>
                Signup
              </a>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
