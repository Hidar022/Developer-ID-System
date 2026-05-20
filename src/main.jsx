import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import Verify from "./pages/Verify";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />} />

        <Route
          path="/verify/DEV-ALIYU-01"
          element={<Verify />}
        />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>

);