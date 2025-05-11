import express from "express";
import { config } from "./config/serverConfig.js";
import { createServer } from "http";
import { Server } from "socket.io";
import chokidar from "chokidar";
import cors from "cors";
import apiRouter from "./routes/index.js";
import { handleEditorSocketEvents } from "./socketHandlers/editorHandler.js";
const { PORT } = config;

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const editorNamespace = io.of("/editor");

editorNamespace.on("connection", (socket) => {
  console.log("editor connected");
  const projectId = socket.handshake.query["projectId"];
  console.log(projectId);

  console.log("project id receive after connection", projectId);
  if (projectId) {
    var watcher = chokidar.watch(`projects/${projectId}`, {
      ignored: (path) => path.includes("node_modules"),
      persistent: true, // it keeps the watcher in running state till the time app is running
      awaitWriteFinish: {
        stabilityThreshold: 2000, // Ensure stability of file before trigger events
      },
      ignoreInitial: true, // ignore the initial file directory
    });

    watcher.on("all", (event, path) => {
      console.log(event, path);
    });
  }

  handleEditorSocketEvents(socket);

  socket.on("disconnect", async () => {
    await watcher.close();
    console.log("editor disconnected");
  });
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("welcome to Code Sand Box....");
});

app.use("/api", apiRouter);

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
