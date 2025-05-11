import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/editorComponent/EditorComponent";
import EditorButton from "../components/atoms/EditorButton/EditorButton";
import TreeStructure from "../components/organisms/TreeStructure/TreeStructure";
import { useEffect } from "react";
import { useTreeStrutureStore } from "../store/TreeStrutureStore";
import { io } from "socket.io-client";
import { useEditorSocketStore } from "../store/EditorSocketStore";

const ProjectPlayground = () => {
  const { projectId: projectIdFromUrl } = useParams();
  const { setProjectId, projectId } = useTreeStrutureStore();
  const { setEditorSocket } = useEditorSocketStore();

  useEffect(() => {
    if (projectIdFromUrl) {
      setProjectId(projectIdFromUrl);
      const editorSocketConn = io(
        `${import.meta.env.VITE_BACKEND_URL}/editor`,
        {
          query: {
            projectId: projectIdFromUrl,
          },
        }
      );
      setEditorSocket(editorSocketConn);
    }
  }, [projectIdFromUrl, setProjectId, setEditorSocket]);
  return (
    <div style={{ display: "flex" }}>
      {projectId && (
        <div
          style={{
            backgroundColor: "#003049",
            minWidth: "250px",
            maxWidth: "25vw",
            overflowY: "auto",
            height: "95vh",
          }}
        >
          <TreeStructure />
        </div>
      )}

      <div>
        <EditorButton isActive={true} />
        <EditorButton />
        <EditorComponent />
      </div>
    </div>
  );
};

export default ProjectPlayground;
