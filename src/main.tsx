import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./hooks/auth";
import { ProductsProvider } from "./hooks/producst";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AuthProvider>
        <ProductsProvider>
          <Routes />
        </ProductsProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
