import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT || 3000,
  REACT_PROJECT_COMMAND: process.env.REACT_PROJECT_COMMAND,
};
