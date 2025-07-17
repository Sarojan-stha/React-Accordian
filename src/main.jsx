import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoadMoreData from "./components/load-more-data/loadMoreData";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadMoreData />
  </StrictMode>
);
