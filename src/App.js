import React, { useState } from "react";
import LoginPage from "./Login/Login";
import Layout from "./Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <React.StrictMode>
        {/* <LoginPage /> */}
        <Layout />
      </React.StrictMode>
    </>
  );
};

export default App;
