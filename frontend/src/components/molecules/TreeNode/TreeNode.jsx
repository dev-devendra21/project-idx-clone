import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import FileIcon from "../../atoms/FileIcon/FileIcon";

import "./TreeNode.css";
import { useEditorSocketStore } from "../../../store/EditorSocketStore";

const TreeNode = ({ fileFolderData }) => {
  const [visibility, setVisibility] = useState({});
  const { editorSocket } = useEditorSocketStore();

  function toggleVisibility(name) {
    setVisibility({
      ...visibility,
      [name]: !visibility[name],
    });
  }

  function computeExtension(fileFolderData) {
    const fileNames = fileFolderData.name.split(".");

    return fileNames[fileNames.length - 1];
  }

  function handleDoubleClick(fileFolderData) {
    editorSocket.emit("readFile", {
      pathToFileOrFolder: fileFolderData.path,
    });
  }
  return (
    fileFolderData && (
      <div style={{ paddingLeft: "15px", color: "white" }}>
        {fileFolderData?.children ? (
          <>
            <button
              style={{
                border: "none",
                cursor: "pointer",
                outline: "none",
                backgroundColor: "transparent",
                paddingTop: "15px",
                fontSize: "16px",
                color: "white",
              }}
              onClick={() => toggleVisibility(fileFolderData?.name)}
            >
              {visibility[fileFolderData.name] ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )}
              {fileFolderData.name}
            </button>
            {visibility[fileFolderData.name] &&
              fileFolderData.children &&
              fileFolderData.children.map((child) => (
                <TreeNode key={child.name} fileFolderData={child} />
              ))}
          </>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 0px",
            }}
            className="selected-file"
          >
            <FileIcon extension={computeExtension(fileFolderData)} />

            <p
              style={{
                cursor: "pointer",
                fontSize: "16px",
                color: "white",
                marginLeft: "5px",
              }}
              onDoubleClick={() => handleDoubleClick(fileFolderData)}
            >
              {fileFolderData.name}
            </p>
          </div>
        )}
      </div>
    )
  );
};

export default TreeNode;
