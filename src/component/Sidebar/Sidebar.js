import React from "react";
import { render } from "react-dom";
import logo from "./image2.png";
import "./Sidebar.css";
import { Link, useHistory } from "react-router-dom";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import Dashboard from "../Dashboard";
const pdata = [
  {
    x: 15,
    y: 40,
  },
  {
    x: 27,
    y: 20,
  },
  {
    x: 55,
    y: 35,
  },
  {
    x: 13,
    y: 17,
  },
  {
    x: 55,
    y: 50,
  },
  {
    x: 30,
    y: 26,
  },
];

const Sidebar = () => {
  const employee = () => {
    history.push("/Employee");
  };
  const log = () => {
    history.push("./Login");
  };
  const history = useHistory();
  return (
    <div className="d-flex">
      <Dashboard />
      <div className="main d-flex flex-column">
        <h2 className="my-3 mx-3">Dashboard</h2>
        <div class="row">
          <div
            class="col-11  border-right text-right"
            style={{ marginLeft: "70px" }}
          >
            <i
              class="fa fa-bell border-right mx-3"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
            <strong style={{ fontSize: "20px" }}>Saifullah</strong>
            <i
              class="fa fa-user-circle mx-1"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
          </div>
        </div>
        <div class="row  my-5 mx-5">
          <div class="col-sm-4 col-lg-4 col-xl-2 my-1">
            <div class="card  bg-light shadow" style={{ width: "10rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h5 class="card-title text-muted text-center">Products</h5>
                <h1 className="card-title text-center">60K</h1>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-lg-4 col-xl-2 my-1">
            <div class="card  bg-light shadow" style={{ width: "10rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body ">
                <h5 class="card-title text-muted text-center">Customers</h5>
                <h1 class="card-title text-center">23K</h1>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-lg-4 col-xl-2 my-1">
            <div class="card  bg-light shadow" style={{ width: "10rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body text-center">
                <h5 class="card-title text-muted">Orders</h5>
                <h1 class="card-title">52K</h1>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-lg-4 col-xl-2 my-1">
            <div class="card  bg-light shadow" style={{ width: "10rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body text-center">
                <h5 class="card-title text-muted">Sales</h5>
                <h1 class="card-title">$32K</h1>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-lg-4 col-xl-2 my-1">
            <div class="card  bg-light shadow" style={{ width: "10rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body text-center">
                <h5 class="card-title text-muted">Out of Stock</h5>
                <h1 class="card-title">10</h1>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-lg-4 col-xl-2 my-1">
            <div class="card  bg-light shadow " style={{ width: "10rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body ">
                <h5 class="card-title text-muted text-center">Revenue</h5>
                <h1 class="card-title text-center">$150K</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="row mx-2 " xs="1" sm="1" md="1" lg="1">
          <div class="col-lg-8 col-xl-9 col-sm-6  border mx-2   ">
            <div className="graphtop ">
              <div className="left d-flex flex-column">
                <h5 className="chart-heading mx-5  ">Today's Trends</h5>
                <h6 className="chart-heading text-muted mx-5 ">
                  as of 25 May 2019,09:41 PM
                  <button type="submit">Export</button>
                </h6>
              </div>
            </div>
            <ResponsiveContainer width="50%" aspect={2}>
              <LineChart
                data={pdata}
                width={100}
                hieght={50}
                margin={{ top: 20, left: 1, right: 20, bottom: 1 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis dataKey="y" interval={"preserveStartEnd"} />
                <XAxis dataKey="x" interval={"preserveStartEnd"} />
                <Tooltip />
                {/* contentStyle={{ backgroundColor:'yellow'}} */}
                {/* <Legend/> */}

                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="gray"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="x"
                  stroke="red"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div
            class="col-sm-6 col-lg-6 col-xl-3  shadow float-right "
            style={{ width: "14rem" }}
          >
            <div class="card " style={{ height: "30vh" }}>
              <table className="my-3">
                <h5 className="mx-2">Top Selling Shoes</h5>
                <h6 className="text-muted mx-2 mb-4">Today</h6>

                <tr className="border-bottom mb-3 my-5">
                  <td className="px-2">SNEAKER-1809</td>
                  <td className="px-2">10</td>
                </tr>
                <tr className="border-bottom my-3">
                  <td className="px-2">033 LUGGAGE LT</td>
                  <td className="px-2">9</td>
                </tr>
                <tr className=" mb-5">
                  <td className="px-2">Baby Shoes</td>
                  <td className="px-2">5</td>
                </tr>
              </table>
            </div>
            <div className="card my-5" style={{ height: "30vh" }}>
              <table className="my-3">
                <h5 className="mx-2">Top Selling Representative</h5>
                <h6 className="text-muted mx-2 mb-4">Today</h6>

                <tr className="border-bottom my-5">
                  <td className="px-2">SNEAKER-1809</td>
                  <td className="px-2">10</td>
                </tr>
                <tr className="border-bottom">
                  <td className="px-2">033 LUGGAGE LT</td>
                  <td className="px-2">9</td>
                </tr>
                <tr>
                  <td className="px-2">Baby Shoes</td>
                  <td className="px-2">5</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
