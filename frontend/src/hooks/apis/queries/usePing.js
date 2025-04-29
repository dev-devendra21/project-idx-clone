import { useQuery } from "@tanstack/react-query";
import { pingApi } from "../../../apis/ping";

export default function usePing() {
  const { isError, isLoading, data, error } = useQuery({
    queryFn: pingApi,
    queryKey: "ping", // it will save cache in the key ping
    staleTime: 10000, // means after 10 sec it will refetch
  });

  return { isError, isLoading, data, error };
}
