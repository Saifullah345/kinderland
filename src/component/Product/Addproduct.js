import React from "react";
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dashboard from "../Dashboard";
import { useHistory } from "react-router-dom";
import "./Addproduct.css";
import { Dropdown } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
const drawerWidth = 220;
const Addproduct = () => {
  const [factory, setFactory] = useState("");
  const [sku, setSku] = useState("");
  const [brand, setBrand] = useState("");
  const [stitch, setStich] = useState("");
  const [outsolecolor, setOutsolecolor] = useState("");
  const [outsoletype, setOutsoletype] = useState("");
  const [price3, setPrice3] = useState("");
  const [price1, setPrice1] = useState("");
  const [picture, setPicture] = useState("");
  const [size, setSize] = useState(null);
  const [done, setdone] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const Product = () => {
    history.push("./product");
  };
  const history = useHistory();
  const Submit = (e) => {
    //  e.preventDefault();
    axios
      .post("https://comcodecue.herokuapp.com/add-product-data", {
        sku: sku,
        Bow: "hjhjhjhjhh",
        Brand: brand,
        Description: "hjhjhjhjhh",
        Factory: factory,
        ID: "hjhjhjhjhh",
        Last: "hjhjhjhjhh",
        Location1: "hjhjhjhjhh",
        Location2: "hjhjhjhjhh",
        Location3: "hjhjhjhjhh",
        Location4: "hjhjhjhjhh",
        Location5: "hjhjhjhjhh",
        Location6: "hjhjhjhjhh",
        Material1: "hjhjhjhjhh",
        Material2: "hjhjhjhjhh",
        Material3: "hjhjhjhjhh",
        Material4: "hjhjhjhjhh",
        Material5: "hjhjhjhjhh",
        Price3: price3,
        Outsolecolor: outsolecolor,
        Outsoletype: outsoletype,
        Stitch: stitch,
        Price1: price1,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Submit();
  };
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
              Product Management
            </h3>
            <div className="top_end d-flex justify-content-end">
              <a href="#">
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
              <h3 className="text-muted text-dark d-flex justify-content-start">
                Add New Product
              </h3>
              <div className="table_right d-flex">
                <input
                  type="button"
                  value="Cancel"
                  className=" w-100 h-50 btntd w-auto my-2 w-auto     "
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                  onClick={Product}
                />
                <button
                  type="Submit"
                  value="Add"
                  className=" w-100 h-50 mx-2 btntd w-auto my-2 w-auto "
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                  onClick={handleSubmit}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="showw d-flex flex-column">
              <Form onSubmit={handleSubmit}>
                <div class="row g-3 mx-3 d-flex">
                  <div class="col-sm-4">
                    <h5 className="text-muted">Factory</h5>
                    <input
                      type="text"
                      class="form-control h-50"
                      placeholder="Input Text"
                      name="factory"
                      value={factory}
                      aria-label="First name"
                      onChange={(e) => setFactory(e.target.value)}
                      required
                    />
                  </div>
                  <div class="col-sm-4">
                    <h5 className="text-muted">SKU</h5>
                    <input
                      type="text"
                      class="form-control h-50"
                      placeholder="Input Text"
                      aria-label="First name"
                      value={sku}
                      name="sku"
                      onChange={(e) => setSku(e.target.value)}
                      required
                    />
                  </div>
                  <div class="col-sm-4">
                    <h5 className="text-muted">Brand Name</h5>
                    <input
                      type="text"
                      class="form-control h-50"
                      placeholder="Input Text"
                      aria-label="Brand name"
                      value={brand}
                      name="brand"
                      onChange={(e) => setBrand(e.target.value)}
                      required
                    />
                  </div>
                  <div class="col-sm-4">
                    <h5 className="text-muted">Stich</h5>
                    <input
                      type="text"
                      class="form-control h-50"
                      placeholder="Input Text"
                      aria-label="First name"
                      name="stich"
                      value={stitch}
                      onChange={(e) => setStich(e.target.value)}
                      required
                    />
                  </div>
                  <div class="col-sm-4">
                    <h5 className="text-muted">Outsole Color</h5>
                    <input
                      type="text"
                      class="form-control h-50"
                      placeholder="Input Text"
                      aria-label="First name"
                      name="outsolecolor"
                      value={outsolecolor}
                      onChange={(e) => setOutsolecolor(e.target.value)}
                      required
                    />
                  </div>
                  <div class="col-sm-4">
                    <h5 className="text-muted">Outsole Type</h5>
                    <input
                      type="text"
                      class="form-control h-50"
                      placeholder="Input Text"
                      aria-label="First name"
                      name="outsoletype"
                      value={outsoletype}
                      onChange={(e) => setOutsoletype(e.target.value)}
                      required
                    />
                  </div>
                  <div class="col-sm-4">
                    <h5 className="text-muted">Actual Price</h5>
                    <input
                      type="text"
                      class="form-control h-50"
                      placeholder="Input Text"
                      aria-label="First name"
                      name="price3"
                      value={price3}
                      onChange={(e) => setPrice3(e.target.value)}
                      required
                    />
                  </div>
                  <div class="col-sm-4">
                    <h5 className="text-muted">Sale Price</h5>
                    <input
                      type="text"
                      class="form-control h-50"
                      placeholder="Input Text"
                      aria-label="First name"
                      name="price1"
                      value={price1}
                      onChange={(e) => setPrice1(e.target.value)}
                      required
                    />
                  </div>
                  <div class="col-sm-4">
                    <h5 className="text-muted">Stock</h5>
                    <input
                      type="text"
                      class="form-control h-50"
                      placeholder="Input Text"
                      aria-label="First name"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-4 custom-control custom-radio mx-4">
                  <p className="text-muted">Color</p>
                  <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    class="custom-control-input mx-2"
                  />
                  <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    class="custom-control-input mx-2"
                  />
                  <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    class="custom-control-input mx-2"
                  />
                  <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    class="custom-control-input mx-2"
                  />
                </div>
                <br />
                <div className="col-sm-1 mx-4 d-flex ">
                  {/* <i class="fas fa-ellipsis-h"></i> */}
                  <h4 className="text-muted pe-2">Size</h4>
                  <select
                    className="w-auto"
                    //  name="size"
                    //onChange={(e) => e.target.value}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-sm-1 mx-4">
                  <input
                    type="file"
                    id="customFile"
                    className=" w-25 h-100 form-control  w-auto text-center "
                    data-toggle="button"
                    aria-pressed="false"
                    autocomplete="off"
                    //name="picture"
                    // onChange={(e) => setPicture(e.target.files[0])}
                  ></input>
                </div>
                {/* <button type="submit"> submi</button> */}
              </Form>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Addproduct;
