import { Routes, Route } from "react-router-dom";
import CreateProject from "./pages/createProject";
import ProjectPlayground from "./pages/ProjectPlayground";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={CreateProject} />
      <Route path="/project/:projectId" Component={ProjectPlayground} />
    </Routes>
  );
};
