import { QueryClient } from "@tanstack/react-query";
import { create } from "zustand";
import { getProjectTreeApi } from "../apis/projects";

const queryClient = new QueryClient();

export const useTreeStrutureStore = create((set, get) => {
  return {
    projectId: null,
    treeStructure: null,
    setTreeStructure: async () => {
      const id = get().projectId;
      const data = await queryClient.fetchQuery({
        queryKey: [`projectTree-${id}`],
        queryFn: () => getProjectTreeApi({ projectId: id }),
      });
      set({
        treeStructure: data,
      });
    },
    setProjectId: (projectId) => {
      set({ projectId });
    },
  };
});
