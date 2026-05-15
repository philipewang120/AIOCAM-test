import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Approach", path: "/approach" },
  { label: "Activities", path: "/activities" },
  { label: "Partnerships", path: "/partnerships" },
  { label: "News", path: "/news" },
  { label: "Volunteer", path: "/volunteer" },
  { label: "Contact", path: "/contact" }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(prev => !prev);
  }

  return (
    <>
      {/* NAVBAR */}
      <AppBar position="fixed" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>

          {/* LOGO */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <Box
              component="img"
              src="src/assets/images/AIOCAMlogo.png"
              alt="AIOCAM Logo"
              sx={{
                width: 55,
                height: 55,
                borderRadius: "50%",
                mr: 2
              }}
            />

            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                display: { xs: "none", sm: "block" }
              }}
            >
              AIOCAM
            </Typography>
          </Box>

          {/* DESKTOP NAV */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex"
              },
              gap: 1
            }}
          >
            {navItems.map(item => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                color="inherit"
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: {
                xs: "block",
                md: "none"
              }
            }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          sx={{
            width: 250
          }}
        >
          <List>
            {navItems.map(item => (
              <ListItem key={item.label} disablePadding>

                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item.label} />

                </ListItemButton>

              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}