import { createTheme, ThemeProvider } from "@mui/material/styles";

const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: "#3C415E",
    },
    secondary: { main: "#F4F1DE " },
    background: { default: "#F2F2F2", paper: "#FFFFFF" },
    text: { primary: "#F5F5F5", secondary: "#3C415E" },
  },
  typography: {
    allVariants: {
      color: "#3C415E",
    },
    
  },
  
});

export default DefaultTheme;
