import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import "./Navbar.css";
import { IconContext } from "react-icons";
import logo from "../Sidebar/image2.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "rgba(79, 99, 103, 1)" }}>
        {/* <div className="navbar w-100"> */}
        {/* <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> */}
        {/* </div> */}
        <nav className={"nav-menu active nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <img className="image my-5 w-75 " src={logo} alt="Reload" />
            {/* <li className="navbar-toggle"> */}
            {/* <Link to="#" className="menu-bars"> */}
            {/* <AiIcons.AiOutlineClose /> */}
            {/* </Link> */}
            {/* </li> */}
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <button
              type="submit"
              className="btn-block my-5"
              style={{
                backgroundColor: " rgba(186, 0, 0, 1)",
                color: "white",
                height: "55px",
                border: "0px solid none",
                borderRadius: "8px",
                marginLeft: "-25px",
              }}
            >
              <strong
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Sumbit
              </strong>
            </button>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
