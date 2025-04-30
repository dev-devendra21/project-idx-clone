import "./EditorButton.css";

const EditorButton = ({ isActive }) => {
  function handleClick() {
    // TODO -> implement handle click
  }
  return (
    <button
      onClick={handleClick}
      style={{
        color: isActive ? "#1dd3b0" : "#fff",
        backgroundColor: isActive ? "#181818" : "#adb5bd",
        borderTop: isActive ? "3px solid #1dd3b0" : "3px solid #90e0ef",
      }}
      className="editor-button"
    >
      file.js
    </button>
  );
};

export default EditorButton;
