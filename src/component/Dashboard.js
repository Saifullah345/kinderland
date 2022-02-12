import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../component/Sidebar/image2.png";
import { useHistory } from "react-router-dom";

const drawerWidth = 220;

function Dashboard(props) {
  const history = useHistory();
  const main = () => {
    history.push("./");
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <img
        className="w-50 center"
        src={logo}
        alt="imag2.png"
        style={{
          display: "block",
          marginBottom: "15px",
          marginTop: "-50px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      />
      {/* <Divider /> */}
      <List className="d-flex flex-column mx-3 justify-content-center">
        <li>
          <a
            href="/DashboardShow"
            className="nav-link text-black d-flex "
            aria-current="page"
          >
            <i class="fa fa-tachometer" aria-hidden="true"></i>
            <svg className="bi me-2" width="16" height="41"></svg>
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="/Employee"
            className="nav-link text-black d-flex "
            aria-current="page"
          >
            <i class="fa fa-user" aria-hidden="true"></i>
            <svg className="bi me-2" width="16" height="41"></svg>
            Employee
          </a>
        </li>
        <li>
          <a
            href="/Product"
            className="nav-link text-black d-flex"
            aria-current="page"
          >
            <i class="fa fa-product-hunt" aria-hidden="true"></i>
            <svg className="bi me-2" width="16" height="41"></svg>
            Proucts
          </a>
        </li>
        <li>
          <a
            href="/customer"
            className="nav-link text-black d-flex"
            aria-current="page"
          >
            <i class="fa fa-users" aria-hidden="true"></i>
            <svg className="bi me-2" width="16" height="41"></svg>
            Customer
          </a>
        </li>
        <li>
          <a
            href="/orders"
            className="nav-link text-black d-flex"
            aria-current="page"
          >
            <i class="fa fa-first-order" aria-hidden="true"></i>
            <svg className="bi me-2" width="16" height="41"></svg>
            Order
          </a>
        </li>
        <li>
          <a
            href="/admins"
            className="nav-link text-black d-flex"
            aria-current="page"
          >
            <i class="fa fa-users" aria-hidden="true"></i>
            <svg className="bi me-2" width="16" height="41"></svg>
            Admins
          </a>
        </li>
        <li>
          <a
            href="/settings"
            className="nav-link text-black"
            aria-current="page"
          >
            <i class="fa fa-cogs" aria-hidden="true"></i>
            <svg className="bi me-2" width="16" height="41"></svg>
            Setting
          </a>
        </li>
        <button
          type="submit"
          className="btn-block my-3   "
          onClick={main}
          style={{
            backgroundColor: " rgba(186, 0, 0, 1)",
            color: "white",
            height: "55px",
            border: "0px solid none",
            borderRadius: "8px",
            maxWidth: "15% ",
            // marginLeft: "-25px",
            position: "fixed",
            bottom: "0",
            left: "9px",
          }}
        >
          <strong
            style={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Logout
          </strong>
        </button>
      </List>
      {/* <Divider /> */}
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="fortrans"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        {/* <Toolbar> */}
        <IconButton
          // color="inherit"
          // aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: "none" },
            justifyContent: "start",
            marginLeft: "2px",
          }}
        >
          <MenuIcon />
        </IconButton>
        {/* <Typography variant="h6" noWrap component="div"> */}
        {/* Responsive drawer */}
        {/* </Typography> */}
        {/* </Toolbar> */}
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          className="fortrans"
          container={container}
          // variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div className="header ">
          <h1 className="justify-content-start">Dashboard</h1>
        </div>
      </Box> */}
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
