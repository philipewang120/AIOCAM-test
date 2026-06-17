import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        color:"inherit",
        mt: 5,
        py: 3,
        borderTop: "1px solid #ddd",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: {
  xs: "center",
  md: "space-between"
  
},

textAlign: {
  xs: "center",
  md: "left"
},

gap: 3,
        px: 4
      }}
    >
      {/* LEFT */}
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} AIOCAM, All rights reserved.
      </Typography>

      {/* CENTER LOGO */}
      <Box
        component={Link}
        to="/"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: { xs: 2, md: 0 }
        }}
      >
        <img
          src="/images/AIOCAMlogo.png"
          alt="Logo"
          style={{
            width: 60,
            height: 50,
            borderRadius: "50%"
          }}
        />
      </Box>

      {/* RIGHT LINKS */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <MuiLink component={Link} to="/" underline="hover" color="inherit">
          Home
        </MuiLink>
        <MuiLink component={Link} to="/volunteer" underline="hover" color="inherit">
          Volunteer
        </MuiLink>
        <MuiLink component={Link} to="/contact" underline="hover" color="inherit">
          Contact
        </MuiLink>
        <MuiLink component={Link} to="/news" underline="hover" color="inherit">
          News
        </MuiLink>
        <MuiLink component={Link} to="/about" underline="hover" color="inherit">
          About
        </MuiLink>
      </Box>
    </Box>
  );
}