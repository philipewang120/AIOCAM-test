import { Box, Toolbar } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Header />
      <Toolbar />
      <Box
        component="main"
        sx={{
          flex: 1
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}