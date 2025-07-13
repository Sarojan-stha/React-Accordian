import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RandomColorGen from "./components/random-color-generator/RandomColorGen.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <RandomColorGen />
  </StrictMode>
);
