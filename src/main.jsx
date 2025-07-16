import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ImageSlider from "./components/image-slider/imageSlider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImageSlider />
  </StrictMode>
);
