import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./hooks/auth";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
