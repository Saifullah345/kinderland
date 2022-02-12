import React from "react";
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dashboard from "../Dashboard";
import "./Setting.css";
const drawerWidth = 220;
const Settings = () => {
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
              Settings
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
                Notification
              </h3>
              <div className="table_right d-flex">
                <input
                  type="button"
                  value="Save"
                  className=" w-100 h-50 btntd w-auto my-2 w-100     "
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                />
              </div>
            </div>
            <div className="data_text my-1 d-flex mr-5 mx-2">
              <p>Your Text Here</p>
              <label class="switch  ">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div className="data_text my-1 d-flex mr-5 mx-2">
              <p>Your Text Here</p>
              <label class="switch  ">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div className="data_text my-1 d-flex mr-5 mx-2">
              <p>Your Text Here</p>
              <label class="switch  ">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Settings;
