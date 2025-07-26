import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./index.css";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/data";
import SearchAutoComplete from "./components/search-autocomplete/SearchAutoComplete";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*     <TreeView menus={menus} />
     */}
    <SearchAutoComplete />
  </StrictMode>
);
