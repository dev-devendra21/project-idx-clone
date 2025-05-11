import React, { useEffect } from "react";

import { useTreeStrutureStore } from "../../../store/TreeStrutureStore";
import TreeNode from "../../molecules/TreeNode/TreeNode";

const TreeStructure = () => {
  const { treeStructure, setTreeStructure } = useTreeStrutureStore();

  useEffect(() => {
    if (!treeStructure) {
      setTreeStructure();
    }
  }, [setTreeStructure, treeStructure]);

  return <TreeNode fileFolderData={treeStructure} />;
};

export default TreeStructure;
