import React from "react";
import HeaderComponent from "./components/Appbar.component";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./styles.css";

export default function App() {
  return (
    <>
      <HeaderComponent />
      <CssBaseline />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </>
  );
}
