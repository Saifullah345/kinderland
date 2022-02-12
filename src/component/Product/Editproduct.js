import React from "react";
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dashboard from "../Dashboard";
// import "./Editproduct.css";
import { Dropdown } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
const drawerWidth = 220;
const Editproduct = () => {
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
                Edit Product
              </h3>
              <div className="table_right d-flex">
                <input
                  type="button"
                  value="Cancel"
                  className=" w-100 h-50 btntd w-auto my-2 w-auto     "
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                />
                <input
                  type="button"
                  value="Add"
                  className=" w-100 h-50 mx-2 btntd w-auto my-2 w-auto "
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="row g-3 mx-3">
              <div class="col-sm-4">
                <h5 className="text-muted">Factory</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">SKU</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Brand Name</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Stich</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Outsole Color</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Outsole Type</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Actual Price</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Sale Price</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Stock</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div className="col-sm-4 custom-control custom-radio">
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

              <Dropdown as={ButtonGroup}>
                <Button variant="success">Split Button</Button>

                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <input
                type="button"
                value="Upload Photo"
                className=" w-100 h-0 btncs w-auto text-center "
                data-toggle="button"
                aria-pressed="false"
                autocomplete="off"
              />
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Editproduct;
