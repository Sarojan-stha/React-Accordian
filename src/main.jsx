import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./index.css";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/data";
import GithubProfileFounder from "./components/github-profile-finder/GithubProfileFounder";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*     <TreeView menus={menus} />
     */}
    <GithubProfileFounder />
  </StrictMode>
);
