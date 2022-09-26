import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import { LogoSvg } from "./Logo";
import { useNavigate } from "react-router-dom";

const drawerWidth = 258;
export const Sidebar = () => {
  const navigate = useNavigate();
  let sideBarItems = [
    { title: "Захиалга", href: "order", icon:<AssignmentOutlinedIcon /> },
    { title: "График", href: "graphic", icon:<SignalCellularAltIcon />  },
    { title: "Тохиргоо", href: "configuration", icon:<SettingsIcon />  },
    { title: "Меню", href: "menu", icon:<RestaurantMenuRoundedIcon />  },
  ];
  return (
    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#000723",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography
          sx={{
            display: "flex",
            width: "100%",
            height: "100px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LogoSvg />
        </Typography>
        <List sx={{ color: "white.main" }}>
          {sideBarItems.map(({ title, icon, href }, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={()=>navigate(href)}>
                <ListItemIcon sx={{ color: "white.main" }}>
                  {icon}
                </ListItemIcon>
                {title}
               
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
