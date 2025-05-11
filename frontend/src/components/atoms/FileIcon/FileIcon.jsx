import React from "react";
import {
  FaSquareJs,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaFilePdf,
  FaPython,
  FaJava,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiJson,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiMarkdown,
  SiYaml,
  SiCplusplus,
  SiGo,
  SiSwift,
  SiKotlin,
  SiRuby,
  SiSvg,
} from "react-icons/si";
import { VscFile } from "react-icons/vsc";

const iconMapper = {
  js: { Icon: FaSquareJs, color: "#facc15" },
  jsx: { Icon: FaReact, color: "#61dafb" },
  ts: { Icon: SiTypescript, color: "#3178c6" },
  tsx: { Icon: SiTypescript, color: "#3178c6" },
  json: { Icon: SiJson, color: "#f97316" },
  html: { Icon: FaHtml5, color: "#e34c26" },
  css: { Icon: FaCss3Alt, color: "#264de4" },
  pdf: { Icon: FaFilePdf, color: "#ef4444" },
  py: { Icon: FaPython, color: "#3776ab" },
  java: { Icon: FaJava, color: "#b07219" },
  php: { Icon: FaPhp, color: "#8892be" },
  gitignore: { Icon: FaGitAlt, color: "#f05032" },
  md: { Icon: SiMarkdown, color: "#ffffff" },
  yaml: { Icon: SiYaml, color: "#cb171e" },
  yml: { Icon: SiYaml, color: "#cb171e" },
  sql: { Icon: SiMysql, color: "#00758f" },
  db: { Icon: SiPostgresql, color: "#336791" },
  mongo: { Icon: SiMongodb, color: "#47a248" },
  cpp: { Icon: SiCplusplus, color: "#00599c" },
  go: { Icon: SiGo, color: "#00add8" },
  swift: { Icon: SiSwift, color: "#f05138" },
  kt: { Icon: SiKotlin, color: "#7f52ff" },
  rb: { Icon: SiRuby, color: "#cc342d" },
  node: { Icon: FaNodeJs, color: "#3c873a" },
  svg: { Icon: SiSvg, color: "#61dafb" },
};

const FileIcon = ({ extension, size = 20 }) => {
  const iconEntry = iconMapper[extension];

  if (iconEntry) {
    const { Icon, color } = iconEntry;
    return <Icon size={size} color={color} />;
  }

  return <VscFile size={size} color="#cbd5e1" />;
};

export default FileIcon;
