import { useQuery } from "@tanstack/react-query";
import { getProjectTreeApi } from "../../../apis/projects";

export const useProjectTree = (projectId) => {
  const {
    data: projectTree,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryFn: () => getProjectTreeApi({ projectId }),
  });

  return {
    error,
    isError,
    isLoading,
    projectTree,
  };
};
