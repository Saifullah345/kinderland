import React, { useState } from "react";
// import Dashboard from './Dashboard'
import Navbar from "../Practice/Navbar";
import "./Tableone.css";

const TableOne = () => {
  const [show, setShow] = useState(false);
  const SetShow =()=>{
    setShow(!show);
  }
//   const SetShoww = () =>{
//  setShow(false);
//   }
  return (
    <div className="d-flex">
      
      <div className={show ? "ju" : "show"}  ><Navbar/>  </div>
      <div className="menu-toggle ">
        <i
          // class="fa fa-bars"
          className={!show ? "fa fa-bars" : "fa fa-times"}
          aria-hidden="true"
          onClick={() => SetShow()}
        >  </i>
      </div>
      {/* <div className="menu-toggle mx-5">
        <i className="fa fa-times"
        onClick={() => SetShoww()}></i>
      </div> */}
      
     <div className="for_main text-center">
       <h1 className="text-muted">Dashboard</h1>

     </div>
    </div>
  );
};

export default TableOne;
