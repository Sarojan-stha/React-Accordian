import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StarRating from "./components/starRating/StarRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating />
  </StrictMode>
);
