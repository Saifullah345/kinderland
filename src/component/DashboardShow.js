import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React from "react";
import Dashboard from "./Dashboard";
import Dashboardtable from "./Dashboardtable";
import "./Dashboardshow.css";
import logo from ".//Customer/KHan.jpg";
import logo1 from "./Ellipse 1.png";
import logo2 from "./Ellipse 2.png";
import logo12 from "./Ellipse 12.png";

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

const drawerWidth = 220;
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
const DashboardShow = () => {
  var date = new Date();
  const weekday = ["Sun", "Mon", "Tues", "Thurs", "Fri", "Sat"];
  const monthss = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let newDate = new Date().toDateString();
  let newTime = new Date().toLocaleTimeString();
  //  var day=weekday[date.getday()];
  const d = new Date();
  const cday = () => {
    var wday = new Array(7);
    wday[0] = "Sun";
    wday[1] = "Mon";
    wday[2] = "Tue";
    wday[3] = "Wed";
    wday[4] = "Thur";
    wday[5] = "Fri";
    wday[6] = "Sat";

    let ctime = new Date();
    let day = wday[ctime.getDay()];
    return day;
  };
  const day = cday[date.getDay()];

  return (
    <>
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
          <div className="top d-flex mb-4 fixed-top sticky-top">
            <h3 className="text-muted text-dark d-flex justify-content-start ">
              Dashboard
            </h3>
            <div className="top_end d-flex justify-content-end le-op ">
              <a href="#">
                <i className="fa fa-bell h-0 d-flex justify-content-end"></i>
              </a>
              <div className="vl justify-content-end"></div>
              <h4>Saifullah</h4>
              <img src={logo} class="rounded-circle  " alt="Reload" />
            </div>
          </div>
          <div class="row   d-flex justify-content-center  products mb-2   ">
            <div class="col-sm-4 col-6 col-md-4 col-lg-4 col-xl-2 my-1  ">
              <div class="card  bg-light shadow" style={{ width: "10rem" }}>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body">
                  <h5 class="card-title text-muted text-center">Products</h5>
                  <h1 className="card-title text-center">60K</h1>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-6 col-md-4 col-lg-4 col-xl-2 my-1 ">
              <div class="card  bg-light shadow" style={{ width: "10rem" }}>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body ">
                  <h5 class="card-title text-muted text-center">Customers</h5>
                  <h1 class="card-title text-center">23K</h1>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-6 col-md-4 col-lg-4 col-xl-2 my-1">
              <div class="card  bg-light shadow" style={{ width: "10rem" }}>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body text-center">
                  <h5 class="card-title text-muted">Orders</h5>
                  <h1 class="card-title">52K</h1>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-6 col-md-4 col-lg-4 col-xl-2 my-1">
              <div class="card  bg-light shadow" style={{ width: "10rem" }}>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body text-center">
                  <h5 class="card-title text-muted">Sales</h5>
                  <h1 class="card-title">$32K</h1>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-6 col-md-4 col-lg-4 col-xl-2 my-1">
              <div class="card  bg-light shadow" style={{ width: "10rem" }}>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body text-center">
                  <h5 class="card-title text-muted">Out of Stock</h5>
                  <h1 class="card-title">10</h1>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-6 col-md-4  col-lg-4 col-xl-2 my-1">
              <div class="card  bg-light shadow " style={{ width: "10rem" }}>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body ">
                  <h5 class="card-title text-muted text-center">Revenue</h5>
                  <h1 class="card-title text-center">$150K</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-8 col-12 mx-auto col-lg-8 h-auto border col-md-6 ">
              <div className="graphtop_graph d-flex ">
                <div className="left d-flex flex-column ">
                  <h5 className="chart-heading mx-5 my-3  ">Today's Trends</h5>
                  <h6 className="chart-heading text-muted mx-5 ">
                    as of {newDate},{newTime}
                  </h6>
                </div>
                <input
                  type="button"
                  value="Export"
                  className="h-75 w-100 w-auto btn-right"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                />
                <hr />
              </div>
              <span className="day ">
                <hr /> Today <hr className="text-muted" /> {cday()}
              </span>
              <div className="graph h-auto w-auto my-4">
                <ResponsiveContainer width="100%" hieght="100%" aspect={2.5}>
                  <LineChart
                    data={pdata}
                    width={100}
                    hieght={100}
                    margin={{ top: 35, left: 1, right: 20, bottom: 2 }}
                  >
                    <CartesianGrid strokeDasharray="9 2" />
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
            </div>
            <div className="col-sm-4 col-12 col-lg-4 col-md-6">
              <div className="card  mb-2 border text-muted card_left ">
                <h5 className="mx-2 text-muted my-1">Top Selling Shoes</h5>
                <span>Today</span>
                <div className="card_main my-2">
                  <div className="first">
                    <img
                      src={logo1}
                      class="rounded-circle mx-1 "
                      alt="Reload"
                    />
                    <span>Allie Grater</span>
                    <span className="last">50</span>
                  </div>
                  <hr />
                  <div className="second my-2">
                    <img
                      src={logo2}
                      class="rounded-circle mx-1 "
                      alt="Reload"
                    />
                    <span>Peg Legge</span>
                    <span className="last">48</span>
                  </div>
                  <hr />
                  <div className="third my-1">
                    <img
                      src={logo1}
                      class="rounded-circle mx-1 "
                      alt="Reload"
                    />
                    <span>Liz Erd</span>
                    <span className="last">39</span>
                  </div>
                </div>
              </div>
              <div className="card  border text-muted card_left ">
                <h5 className="mx-2 text-muted">Top Selling Representative</h5>
                <span>Today</span>
                <div className="card_main my-2">
                  <div className="first">
                    <img
                      src={logo12}
                      class="rounded-circle mx-1 "
                      alt="Reload"
                    />
                    <span>Allie Grater</span>
                    <span className="last">50</span>
                  </div>
                  <hr />
                  <div className="second my-2">
                    <img
                      src={logo12}
                      class="rounded-circle mx-1 "
                      alt="Reload"
                    />
                    <span>Peg Legge</span>
                    <span className="last">48</span>
                  </div>
                  <hr />
                  <div className="third my-1">
                    <img
                      src={logo12}
                      class="rounded-circle mx-1 "
                      alt="Reload"
                    />
                    <span>Liz Erd</span>
                    <span className="last">39</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="table my-2">
            <Dashboardtable />
          </div> */}
        </Box>
      </Box>
    </>
  );
};

export default DashboardShow;
