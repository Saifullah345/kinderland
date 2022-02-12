import React from "react";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dashboard from "../Dashboard";
import { useState } from "react";
import axios from "axios";
// import "./Addcustomer.css";
const drawerWidth = 220;
const Addcustomer = () => {
  const _handleChange = (e) => {
    setFirstname({ ...firstname, [e.target.name]: e.target.value });
  };
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [storeName, setStoreName] = useState("");
  const [email_1, setEmail_1] = useState("");
  const [cell_1, setCell_1] = useState("");
  function handleCancel(e) {
    e.preventDefault();
    setFirstname({ firstname: " " });
  }
  async function handleSubmit(e) {
    axios
      .get("https://comcodecue.herokuapp.com/get-customers", {
        firstname: firstname,
        lastname: lastname,
        storeName: storeName,
        email_1: email_1,
        cell_1: cell_1,
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.data);
        console.log(err.response);
      });
  }
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Dashboard />

        <AppBar
          className="fortrans"
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        ></AppBar>
        <Box
          sx={{
            flexGrow: 1,
            p: 2,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <div className="top d-flex mb-5">
            <h3 className="text-muted text-dark d-flex justify-content-start">
              Customer Management
            </h3>
            <div className="top_end d-flex justify-content-end">
              <a href="/icon">
                <i className="fa fa-bell d-flex justify-content-end"></i>
              </a>
              <div className="vl justify-content-end"></div>
              <h4>Saifullah</h4>
              <a href="#">
                <i class="fa fa-user-circle"></i>
              </a>
            </div>
          </div>
          <div className="for_main d-flex flex-column">
            <div className="top_table_top d-flex mx-2">
              <h4 className="text-muted text-dark d-flex justify-content-start my-2">
                Add New Customer
              </h4>
              <div className="table_right d-flex">
                <input
                  type="button"
                  value="Cancel"
                  className=" w-100 h-50 btntd w-auto my-2 w-auto     "
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                  onClick={handleCancel}
                />
                <input
                  type="button"
                  value="Add"
                  className=" w-100 h-50 mx-2 btntd w-auto my-2 w-auto "
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                  onClick={handleSubmit}
                />
              </div>
            </div>
            <div class="row g-3 mx-3">
              <div class="col-sm-4">
                <h5 className="text-muted">First Name</h5>
                <input
                  type="text"
                  name="firstname"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Last Name</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                  name="lastname"
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Company/ShopName</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                  name="storeName"
                  onChange={(e) => setStoreName(e.target.value)}
                  required
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Email</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                  name="email-1"
                  onChange={(e) => setEmail_1(e.target.value)}
                  required
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Phone</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="Phone"
                  name="cell_1"
                  onChange={(e) => setCell_1(e.target.value)}
                  required
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Joining Date</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="dd/mm/yy"
                  aria-label="Joining date"
                  required
                />
              </div>
              <div class="col-sm-12">
                <h5 className="text-muted">Description</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <input
                type="button"
                value="Upload Photo"
                className=" w-100 h-0 btncs pt-3 w-auto text-center mb-2 "
                data-toggle="button"
                aria-pressed="false"
                autocomplete="off"
              />
            </div>
            <h4 className="text-muted mx-3 ">Billing Address</h4>
            <div class="row g-3 mx-3">
              <div class="col-sm-4">
                <h5 className="text-muted">City</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">State</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Zip</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="dd/mm/yy"
                  aria-label="First name"
                />
              </div>
            </div>
            <h4 className="text-muted mx-3 ">Shipping Address</h4>
            <div class="row g-3 mx-3">
              <div class="col-sm-4">
                <h5 className="text-muted">City</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">State</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Zip</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="dd/mm/yy"
                  aria-label="First name"
                />
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Addcustomer;
