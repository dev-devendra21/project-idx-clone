import { config } from "../config/serverConfig.js";
import uuid4 from "uuid4";
import fs from "fs/promises";
import { execPromisified } from "../utils/execUtils.js";
import directoryTree from "directory-tree";
import path from "path";

const { REACT_PROJECT_COMMAND } = config;

export const createProjectService = async () => {
  // create a new id and then inside a projects folder create a folder with that id

  const projectId = uuid4();

  await fs.mkdir(`./projects/${projectId}`);

  // after these call the npm create vite command in the newly created project folder

  await execPromisified(REACT_PROJECT_COMMAND, {
    cwd: `./projects/${projectId}`,
  });

  return projectId;
};

export const getProjectTreeService = async (projectId) => {
  const projectPath = path.resolve(`./projects/${projectId}`);
  const tree = directoryTree(projectPath);
  return tree;
};
