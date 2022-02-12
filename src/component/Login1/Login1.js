import React, { useState, useEffect } from "react";
import "./Login1.css";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function Login1() {
  // const [values, setValues] = useState({});

  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [eye, seteye] = useState(true);
  // const [password, setppassword] = useState("password");
  const [type, settype] = useState(false);

  const history = useHistory();
  const Eye = () => {
    if (password == "password") {
      setpassword("text");
      seteye(false);
      settype(true);
    } else {
      setpassword("password");
      seteye(true);
      settype(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PostApi();
    // setdone(true);
  };

  const PostApi = () => {
    axios
      .post("/login", {
        email: name,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          setTimeout(() => {
            history.push(`/dashboardshow`);
            console.log(name);
            console.log(password);
            console.log(response.data);
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(err);
        console.log(name);
        console.log(password);
        alert(err.response.data);
      });
  };
  // useEffect(() => {
  //   PostApi();
  // }, []);
  return (
    <div>
      <div className="mainn1 w-100">
        <div className="main_data d-flex flex-column col-10 col-md-6 col-xl-4 col-sm-6  ">
          <h1 className="text-center">Login</h1>
          <Form
            className="input my-3 justify-content-center"
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <Form.Control
                className="h-100 w-100 my-2 text-dark"
                type="email"
                placeholder="Email"
                name="name"
                onChange={(e) => setname(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="input-group  ">
              <Form.Control
                className="h-100 w-75 my-2 text-dark d-flex"
                type="password"
                placeholder="Password"
                // value="password"
                name="password"
                onChange={(e) => setpassword(e.target.value)}
                required
              />
              {/* <i
                onClick={Eye}
                className={`fa ${eye ? "fa-eye-slash" : "fa-eye"} h-100 mt-4`}
              ></i> */}
            </Form.Group>

            <Form.Group>
              <a className="text-right mb-2" href="/Reset">
                Forgot Password
              </a>
            </Form.Group>
            <div class=" btn1 d-grid gap-2 btn-block mx-auto mb-3 my-2">
              <button type="submit">Login</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login1;
