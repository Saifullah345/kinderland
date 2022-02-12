import React from "react";
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dashboard from "../Dashboard";
import { useHistory } from "react-router-dom";
// import "./OrderHistory.css";
const drawerWidth = 220;
const OrderHistory = () => {
  const history = useHistory();
  const Active = () => {
    history.push("./orders");
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
              Order Management
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
                        Order History
                      </h3>
                      <div className="table_right d-flex">
                        <i className="fa fa-filter"></i>
                        <input
                          type="button"
                          value="View Active Orders"
                          className=" w-100 h-50 btntd bg-primary w-auto "
                          data-toggle="button"
                          aria-pressed="false"
                          autocomplete="off"
                          onClick={Active}
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
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48AM
                  </td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48AM
                  </td>
                  <td>
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>56454</td>
                  <td>Baby Shoes</td>
                  <td>Sneakers</td>
                  <td>$25.00</td>
                  <td>$30.00</td>
                  <td>Jack Ma</td>
                  <td>
                    01-08-2021 <br />
                    10:48 AM
                  </td>
                  <td>
                    {" "}
                    <button className="btn_table w-50" type="submit">
                      Active
                    </button>
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

export default OrderHistory;
