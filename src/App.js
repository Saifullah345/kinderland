import React from "react";
// import Login from "./component/Login/Login";
import Main from "./component/Main/Main";
import Sidebar from "./component/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reset from "./component/Reset/Reset";
import Account from "./component/Account/Account";
import Dashboard from "./component/Dashboard";
import Navbar from "./component/Practice/Navbar";
import TableOne from "./component/Tableone/TableOne";
import DashboardShow from "./component/DashboardShow";
import Employee from "./component/Employee/Employee";
import EnhancedTable from "./component/Employee/EnhancedTable";
import Dashboardtable from "./component/Dashboardtable";
import Product from "./component/Product/Product";
import Customer from "./component/Customer/Customer";
import Orders from "./component/Orders/Orders";
import Admins from "./component/Admins/Admins";
import Settings from "./component/Setting/Settings";
import Login1 from "./component/Login1/Login1";
import Addemployee from "./component/Employee/Addemployee";
import Editemployee from "./component/Employee/Editemloyee";
import Addproduct from "./component/Product/Addproduct";
import Editproduct from "./component/Product/Editproduct";
import Addcustomer from "./component/Customer/Addcustomer";
import Editcustomer from "./component/Customer/Editcustomer";
import OrderHistory from "./component/Orders/OrderHistory";
import Addadmin from "./component/Admins/Addadmin";
import Editadmin from "./component/Admins/Editadmin";
import Login from "./component/Login/Login";



const App = () => {
  return (
    // <Dashboard />
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login1/>
        </Route>
        {/* <Route exact path="/Login1">
          <Login/>
        </Route> */}
        <Route path="/sidebar">
          <Sidebar />
        </Route>
        <Route path="/Employee">
        <Employee/>
        </Route>
        <Route path="/Reset">
          <Reset />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/TableOne">
          <TableOne/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/navbar">
          <Navbar/>
        </Route>
        <Route path="/product">
          <Product/>
        </Route>
        <Route path="/customer">
          <Customer/>   
        </Route>
        <Route path="/orders">
          <Orders/>
        </Route>
        <Route path="/admins">
          <Admins/>
        </Route>
        <Route path="/settings">
          <Settings/>
        </Route>
        <Route path="/addemployee">
          <Addemployee/>
        </Route>
        <Route path="/editemployee">
          <Editemployee/>
        </Route>
        <Route path="/addproduct">
          <Addproduct/>
        </Route>
        <Route path="/editproduct">
          <Editproduct/>
        </Route>
        <Route path="/addcustomer">
         <Addcustomer/>
        </Route>
        <Route path="/editcustomer">
         <Editcustomer/>
        </Route>
        <Route path="/orderhistory">
         <OrderHistory/>
        </Route>
        <Route path="/addadmins">
         <Addadmin/>
        </Route>
        <Route path="/editadmins">
        <Editadmin/>
        </Route>
        <Route path="/dashboardshow">
          {/* <EnhancedTable/> */}
         <DashboardShow/>
        </Route>

      </Switch>
    </Router>

   
  );
};

export default App;
