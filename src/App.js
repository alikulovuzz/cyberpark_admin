import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Main from "./components/Main";


const App = () => {

  return (
    <>
      <Routes>
        <Route exact path={"/"} element={<Main />}>
          <Route exact index element={<Home />} />
          <Route exact path={"mod"} element={<p>mod</p>} />
          <Route exact path={"admin"} element={<p>admin</p>} />
          <Route exact path={"user"} element={<p>user</p>} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
