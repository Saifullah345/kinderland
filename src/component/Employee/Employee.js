import React from "react";
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dashboard from "../Dashboard";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useHistory } from "react-router-dom";
import "./Employee.css";
import logo from "..//Customer/KHan.jpg";
import logo12 from "./Ellipse 1.png";
// import {Navigate} from "react-router-dom";
const drawerWidth = 220;
const options = [
  [
    <a
      style={{
        color: "black",
        textDecoration: "none",
      }}
      href="/addemployee"
    >
      Add Employee
    </a>,
  ],
  [
    <a
      style={{
        color: "black",
        textDecoration: "none",
      }}
      href="/editemployee"
    >
      Edit Employee
    </a>,
  ],
];

const ITEM_HEIGHT = 48;
const Employee = () => {
  //
  // const navigate=UseNavigate();
  //
  //
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();
  const AddE = () => {
    history.push("./addemployee");
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
            p: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <div className="top d-flex mb-5 fixed-top sticky-top">
            <h3 className="text-muted text-dark d-flex justify-content-start">
              Employee Management
            </h3>
            <div className="top_end d-flex justify-content-end le-op">
              <a href="#">
                <i className="fa fa-bell d-flex justify-content-end"></i>
              </a>
              <div className="vl justify-content-end"></div>
              <h4>Saifullah</h4>
              <img src={logo} class="rounded-circle  " alt="Reload" />
            </div>
          </div>
          <div class="container">
            <table class="table-fixed table table-responsive table-borderless">
              <thead>
                <tr>
                  <th colspan="7">
                    <div className="top_table_top d-flex">
                      <h3 className="text-muted text-dark d-flex justify-content-start">
                        All Employees
                      </h3>
                      <div className="table_right d-flex">
                        <i className="fa fa-filter"></i>
                        <input
                          type="button"
                          value="Add New"
                          className=" w-100 h-50 btntd w-auto "
                          data-toggle="button"
                          aria-pressed="false"
                          autocomplete="off"
                          onClick={AddE}
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
                  <th>Phone</th>
                  <th>Store Name</th>
                  <th>Join Date</th>
                  <th className="prepend">Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-muted text-center">
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
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button
                      className="btn_table btn_table_c w-50"
                      type="submit"
                    >
                      Disabled
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button
                      className="btn_table btn_table_c w-50"
                      type="submit"
                    >
                      Disabled
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button
                      className="btn_table btn_table_c w-50"
                      type="submit"
                    >
                      Disabled
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button
                      className="btn_table btn_table_c w-50"
                      type="submit"
                    >
                      Disabled
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button
                      className="btn_table btn_table_c w-50"
                      type="submit"
                    >
                      Disabled
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button
                      className="btn_table btn_table_c w-50"
                      type="submit"
                    >
                      Disabled
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button
                      className="btn_table btn_table_c w-50"
                      type="submit"
                    >
                      Disabled
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button
                      className="btn_table btn_table_c w-50"
                      type="submit"
                    >
                      Disabled
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button
                      className="btn_table btn_table_c w-50"
                      type="submit"
                    >
                      Disabled
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button
                      className="btn_table btn_table_c w-50"
                      type="submit"
                    >
                      Disabled
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button
                      className="btn_table btn_table_c w-50"
                      type="submit"
                    >
                      Disabled
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button
                      className="btn_table btn_table_c w-50"
                      type="submit"
                    >
                      Disabled
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                  <td>
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
                    <span className="mr g-5">Jack Ma</span>
                  </td>
                  <td>jack@gmail.com</td>
                  <td>+923125655885</td>
                  <td>Lorem Ipsum</td>
                  <td>01-08-2021</td>
                  <td>
                    <button
                      className="btn_table btn_table_c w-50"
                      type="submit"
                    >
                      Disabled
                    </button>
                  </td>
                  <td>
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

export default Employee;
