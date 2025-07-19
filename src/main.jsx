import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./index.css";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/data";
import QrCodeGenerator from "./components/qr-code-generator/QrCodeGenerator";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*     <TreeView menus={menus} />
     */}
    <QrCodeGenerator />
  </StrictMode>
);
