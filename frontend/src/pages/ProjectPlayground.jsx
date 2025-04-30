import {} from "react-router-dom";
import EditorComponent from "../components/molecules/editorComponent/EditorComponent";
import EditorButton from "../components/atoms/EditorButton/EditorButton";

const ProjectPlayground = () => {
  return (
    <>
      <EditorButton isActive={true} />
      <EditorButton />
      <EditorComponent />
    </>
  );
};

export default ProjectPlayground;
