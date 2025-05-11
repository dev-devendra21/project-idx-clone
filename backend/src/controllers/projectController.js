import {
  createProjectService,
  getProjectTreeService,
} from "../service/projectService.js";

export async function createProjectController(req, res) {
  const projectId = await createProjectService();
  return res.status(201).json({ message: "project created", data: projectId });
}

export async function getProjectTreeController(req, res) {
  const tree = await getProjectTreeService(req.params.projectId);

  return res
    .status(200)
    .json({
      message: "successfully fetch the tree",
      data: tree,
      success: true,
    });
}
