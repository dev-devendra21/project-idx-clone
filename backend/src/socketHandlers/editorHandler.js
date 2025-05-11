import fs from "fs/promises";

export const handleEditorSocketEvents = (socket) => {
  // write file
  socket.on("writeFile", async ({ data, pathToFileOrFolder }) => {
    try {
      await fs.writeFile(pathToFileOrFolder, data);
      socket.emit("writeFileSuccess", {
        data: "File written successfully",
      });
    } catch (error) {
      console.log("Error writing the file", error);
      socket.emit("error", {
        data: "Error writing the file",
      });
    }
  });

  // create file
  socket.on("createFile", async ({ pathToFileOrFolder }) => {
    const isFileAlreadyExist = await fs.stat(pathToFileOrFolder);
    if (isFileAlreadyExist) {
      socket.emit("error", {
        data: "file already exist",
      });
      return;
    }

    try {
      await fs.writeFile(pathToFileOrFolder, "");
      socket.emit("createFileSuccess", {
        data: "File created successfully",
      });
    } catch (error) {
      console.log("error creating a file", error);
      socket.emit("error", {
        data: "error creating a file",
      });
    }
  });

  // read file

  socket.on("readFile", async ({ pathToFileOrFolder }) => {
    try {
      const response = await fs.readFile(pathToFileOrFolder);
      socket.emit("readFileSuccess", {
        value: response.toString(),
        path: pathToFileOrFolder,
      });
    } catch (error) {
      console.log("error reading the file", error);
      socket.emit("error", {
        data: "error reading the file",
      });
    }
  });

  // delete file

  socket.on("deleteFile", async ({ pathToFileOrFolder }) => {
    try {
      await fs.unlink(pathToFileOrFolder);
      socket.emit("deleteFileSuccess", {
        data: "File deleted successfully",
      });
    } catch (error) {
      console.log("error deleting a file", error);
      socket.emit("error", {
        data: "error deleting a file",
      });
    }
  });

  // create folder

  socket.on("createFolder", async ({ pathToFileOrFolder }) => {
    try {
      await fs.mkdir(pathToFileOrFolder);
      socket.emit("createFolderSuccess", {
        data: "folder created successfully",
      });
    } catch (error) {
      console.log("error create folder", error);

      socket.emit("error", {
        data: "error create folder",
      });
    }
  });

  // delete folder

  socket.on("deleteFolder", async ({ pathToFileOrFolder }) => {
    try {
      await fs.rmdir(pathToFileOrFolder, { recursive: true });
      socket.emit("deleteFolderSuccess", {
        data: "Folder deleted successfully",
      });
    } catch (error) {
      console.log("error delete a folder", error);
      socket.emit("error", {
        data: "error delete a folder",
      });
    }
  });
};
