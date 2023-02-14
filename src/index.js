import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import purple from "@mui/material/colors/purple";
import { AppProvider } from "./context";

const customTheme = createTheme({
  palette: {
    primary: {
      main: purple[200],
    },
    mode: "dark",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </AppProvider>
);
