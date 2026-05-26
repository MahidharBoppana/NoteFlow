import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },

  {
    label: "Profile",
    path: "/profile",
    icon: <PersonIcon />,
  },
];

function SideBar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                "&.active": {
                  backgroundColor: "#e0e7ff",
                  color: "#4338ca",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
