import React from "react";
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dashboard from "../Dashboard";
// import "./Editemployee.css";
const drawerWidth = 220;
const Editemployee = () => {
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
              Employee Management
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
                Edit Employee
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
                <h5 className="text-muted">First Name</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Last Name</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Store Name</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Email</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Phone</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="Input Text"
                  aria-label="First name"
                />
              </div>
              <div class="col-sm-4">
                <h5 className="text-muted">Joining Date</h5>
                <input
                  type="text"
                  class="form-control h-50"
                  placeholder="dd/mm/yy"
                  aria-label="First name"
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

export default Editemployee;
