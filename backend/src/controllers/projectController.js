import util from "util";
import { exec } from "child_process";
import fs from "fs/promises";
import uuid4 from "uuid4";

const execPromisified = util.promisify(exec);
export async function createProjectController(req, res) {
  const { stdout, stderr } = await execPromisified("ls");

  // create a new id and then inside a projects folder create a folder with that id

  const projectId = uuid4();

  await fs.mkdir(`./projects/${projectId}`);

  // after these call the npm create vite command in the newly created project folder

  await execPromisified("npm create vite@latest sandbox -- --template react", {
    cwd: `./projects/${projectId}`,
  });

  return res.json({ message: "project created", data: projectId });
}
