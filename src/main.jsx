import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./assets/css/style.css";

import Routing from "./Routing";

createRoot(document.getElementById("root")).render(<Routing />);
