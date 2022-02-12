import React from "react";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dashboard from "../Dashboard";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import "./Orders.css";
const drawerWidth = 220;

const Orders = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .post("https://comcodecue.herokuapp.com/get-order-list")
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        setdata(response.data.Orders);
      })
      .catch((err) => console.log(err));
  }, []);
  const history = useHistory();
  const OrderHistory = () => {
    history.push("./orderhistory");
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
              Orders Management
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
          <div class="container">
            <table class="table-fixed table table-responsive table-borderless">
              <thead>
                <tr>
                  <th colspan="9">
                    <div className="top_table_top d-flex">
                      <h3 className="text-muted text-dark d-flex justify-content-start">
                        Active Orders
                      </h3>
                      <div className="table_right d-flex">
                        <i className="fa fa-download bg-secondary text-white"></i>
                        <i className="fa fa-filter"></i>
                        <input
                          type="button"
                          value="Order History"
                          className=" w-100 h-50 btncsv w-auto "
                          data-toggle="button"
                          aria-pressed="false"
                          autocomplete="off"
                          onClick={OrderHistory}
                        />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>SKU</th>
                  <th>Name</th>
                  <th>Product Type</th>
                  <th>Price</th>
                  <th>Sale Price</th>
                  <th>Cutomer</th>
                  <th>Created on</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="text-muted text-center">
                {data.map((dat) => (
                  <tr>
                    <td>{dat._id}</td>
                    <td>{dat.sku}</td>
                    <td>{dat.Material1}</td>
                    <td>{dat.brand}</td>
                    <td>{dat.unitFinalPrice}</td>
                    <td>{dat.sales}</td>
                    <td>{dat.agentName}</td>
                    <td>
                      {dat.startDate} <br />
                      {dat.time}
                    </td>
                    <td>
                      <button className="btn_table w-75" type="submit">
                        Active
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Orders;
