import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0D47A1"
    },

    secondary: {
      main: "#1565C0"
    },

    background: {
      default: "#f8f9fa"
    },

    text: {
      primary: "#111",
      secondary: "#555"
    }
  },

  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,

    h1: {
      fontWeight: 700
    },

    h2: {
      fontWeight: 700
    },

    h3: {
      fontWeight: 700
    },

    h4: {
      fontWeight: 600
    },

    h5: {
      fontWeight: 600
    },

    button: {
      textTransform: "none",
      fontWeight: 600
    }
  },

  shape: {
    borderRadius: 12
  },

  components: {
    MuiCssBaseline: {
  styleOverrides: {
    body: {
      backgroundImage:
        'url("https://transparenttextures.com/patterns/cubes.png")',

      backgroundRepeat: "repeat",

      backgroundColor: "#f8f9fa"
    }
  }
},

    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 20px"
        }
      }
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        }
      }
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#111"
        }
      }
    }
  }
});

export default theme;