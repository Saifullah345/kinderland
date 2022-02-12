import React from "react";
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dashboard from "../Dashboard";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
const drawerWidth = 220;

const Product = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://comcodecue.herokuapp.com/get-products")
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        setdata(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  });
  const Addproduct = () => {
    history.push("./addproduct");
  };
  const history = useHistory();
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
          <div class="container">
            <table class="table-fixed table  table-responsive table-borderless">
              <thead>
                <tr>
                  <th colspan="9">
                    <div className="top_table_top d-flex">
                      <h3 className="text-muted text-dark d-flex justify-content-start">
                        All Products
                      </h3>
                      <div className="table_rights d-flex">
                        <i className="fa fa-filter"></i>
                        <input
                          type="button"
                          value="Import CSV"
                          className=" w-100 h-50 btncsv w-auto "
                          data-toggle="button"
                          aria-pressed="false"
                          autocomplete="off"
                        />
                        <input
                          type="button"
                          value="Add New"
                          className=" w-100 h-50 btntd w-auto "
                          data-toggle="button"
                          aria-pressed="false"
                          autocomplete="off"
                          onClick={Addproduct}
                        />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Factory</th>
                  <th>SKU</th>
                  <th>Color</th>
                  <th>Stich</th>
                  <th>Outsole Color</th>
                  <th>Outsole Type</th>
                  <th>Size</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody className="text-muted text-center">
                {data.map((dat) => (
                  <tr className="text-center">
                    <td>
                      <i className="fa fa-user-circlee"> {dat.Material2}</i>
                    </td>
                    <td>{dat.Factory}</td>
                    <td>{dat.sku}</td>
                    <td>
                      <i className="fa fa-circle yellow"></i>
                    </td>
                    <td>{dat.Stitch}</td>
                    <td>{dat.Outsolecolor}</td>
                    <td>{dat.Outsoletype}</td>
                    <td>{dat.Size1}</td>
                    <td>{dat.Price3}</td>
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

export default Product;
