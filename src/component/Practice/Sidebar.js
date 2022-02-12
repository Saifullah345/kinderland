import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const Sidebar = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillDashboard />,
    cName: "nav-text",
  },
  {
    title: "Employee",
    path: "/employee",
    icon: <IoIcons.IoMdPerson />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Customers",
    path: "/customers",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Orders",
    path: "/orders",
    icon: <FaIcons.FaJediOrder />,
    cName: "nav-text",
  },
  {
    title: "Admins",
    path: "/admind",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/setting",
    icon: <IoIcons.IoMdSettings />,
    cName: "nav-text",
  },
];
