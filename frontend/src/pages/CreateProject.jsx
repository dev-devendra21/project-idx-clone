import { useNavigate } from "react-router-dom";
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";
import { Button } from "antd";

const CreateProject = () => {
  const { createProjectMutation } = useCreateProject();
  const navigate = useNavigate();
  async function handleCreateProject() {
    try {
      const response = await createProjectMutation();
      navigate(`/project/${response.data}`);
      console.log("now we redirect to the editor page");
    } catch (error) {
      console.log("error while creating project", error);
    }
  }
  return (
    <>
      <h1>Create Project</h1>
      <Button type="primary" onClick={handleCreateProject}>
        Create Playground
      </Button>
    </>
  );
};

export default CreateProject;
