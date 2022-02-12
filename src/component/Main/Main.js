import React from "react";
import "./Main.css";
import logo from "./image2.png";
import { Link, useHistory } from "react-router-dom";

const Main = () => {
  const shoot = () => {
    history.push("/Login");
  };
  const history = useHistory();
  return (
    <div>
      <div className="top-main w-auto ">
        <div
          className="container"
          style={{
            paddingTop: "20vh",
            marginBottom: "0px",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt=""
            className="center rounded mx-auto d-block mb-5"
          />
          <h1 className="text-center">Welcome</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            voluptate nobis quam numquam mollitia <br />
            magnam quaerat maiores harum ipsa repellat. Nobis placeat cupiditate
            perspiciatis dolore,
            <br /> nostrum alias cumque. Natus, ducimus!
          </p>
        </div>
        <div
          class="d-grid gap-2 col-6 my-5 col-sm-4 col-lg-4 col-xl-2 col-md-6 "
          style={{ margin: "auto" }}
        >
          <button
            type="submit"
            onClick={shoot}
            className="btn-block mb-2"
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
              Login
            </strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
