import React from "react";
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dashboard from "../Dashboard";
import "./Admins.css";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useHistory } from "react-router-dom";
import logo12 from "./Ellipse 1.png";
const drawerWidth = 220;
const options = [
  [
    <a
      style={{
        color: "black",
        textDecoration: "none",
      }}
      href="/addadmins"
    >
      Add
    </a>,
  ],
  [
    <a
      style={{
        color: "black",
        textDecoration: "none",
      }}
      href="/editadmins"
    >
      Edit
    </a>,
  ],
];

const ITEM_HEIGHT = 48;
const Admins = () => {
  const history = useHistory();
  const Adda = () => {
    history.push("./addadmins");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
              Admins Management
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
          <div class="container h-100">
            <table class="table-fixed table   table-responsive table-borderless">
              <thead>
                <tr>
                  <th colspan="9">
                    <div className="top_table_top d-flex">
                      <h3 className="text-muted text-dark d-flex justify-content-start">
                        All Admins
                      </h3>
                      <div className="table_right d-flex">
                        <input
                          type="button"
                          value="Add New Admin"
                          className=" w-100 h-50 btncsv w-auto "
                          data-toggle="button"
                          aria-pressed="false"
                          autocomplete="off"
                          onClick={Adda}
                        />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-muted text-center ">
                <tr>
                  <td>
                    <img
                      src={logo12}
                      class="rounded-circle w-25 "
                      alt="Reload"
                      style={{ marginRight: "-8px" }}
                    />
                    <span>Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>jack_1</td>
                  <td>+923125655885</td>
                  <td>
                    <select className="w-50 bg-light shadow ">
                      <option value="1">Admin</option>
                      <option value="1">Editor</option>
                    </select>
                  </td>
                  <td>
                    {" "}
                    <div>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: "20ch",
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem
                            key={option}
                            selected={option === "Pyxis"}
                            onClick={handleClose}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={logo12}
                      class="rounded-circle w-25 "
                      alt="Reload"
                      style={{ marginRight: "-8px" }}
                    />
                    <span>Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>jack_1</td>
                  <td>+923125655885</td>
                  <td>
                    <select className="w-50 bg-light shadow ">
                      <option value="1">Admin</option>
                      <option value="1">Editor</option>
                    </select>
                  </td>
                  <td>
                    {" "}
                    <div>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: "20ch",
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem
                            key={option}
                            selected={option === "Pyxis"}
                            onClick={handleClose}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={logo12}
                      class="rounded-circle w-25 "
                      alt="Reload"
                      style={{ marginRight: "-8px" }}
                    />
                    <span>Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>jack_1</td>
                  <td>+923125655885</td>
                  <td>
                    {" "}
                    <div class="btn-group dropup w-100">
                      <input
                        type="button"
                        value="    Editor"
                        class="btn btn-secondary dropdown-toggle w-50"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">
                          Admins
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: "20ch",
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem
                            key={option}
                            selected={option === "Pyxis"}
                            onClick={handleClose}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Admins;
