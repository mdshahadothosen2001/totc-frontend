import { useQuery } from "@tanstack/react-query";

import { getData } from "../api/endpoints/getData";
import { queryKeys } from "../api/keys/queryKeys";
import type { ApiResponse } from "../types/common.type";

// Function overloads for type safety
export function useGet<T>(
  itemUrl: string,
  options?: {
    forceRefresh?: boolean;
    enabled?: boolean;
    returnFullResponse?: false; // Default: return just data
    key?: string;
  }
): ReturnType<typeof useQuery<T>>;

export function useGet<T>(
  itemUrl: string,
  options?: {
    forceRefresh?: boolean;
    enabled?: boolean;
    returnFullResponse: true; // When true: return full ApiResponse
    key?: string;
  }
): ReturnType<typeof useQuery<ApiResponse<T>>>;

// Implementation
export function useGet<T>(
  itemUrl: string,
  options?: {
    forceRefresh?: boolean;
    enabled?: boolean;
    returnFullResponse?: boolean;
    key?: string;
  }
) {
  return useQuery<T | ApiResponse<T>>({
    queryKey: queryKeys.getDataKeys(
      options?.key ?? itemUrl,
      options?.key ? itemUrl : undefined
    ),
    queryFn: async () => {
      const response = await getData<ApiResponse<T>>(itemUrl);
      return options?.returnFullResponse ? response : response.data;
    },
    staleTime: 30 * 60 * 1000, // 30 minutes in milliseconds
    ...(options?.forceRefresh && {
      staleTime: 0,
      refetchOnMount: "always" as const,
    }),
    enabled: !!itemUrl && itemUrl.length > 0 && (options?.enabled ?? true),
    retry: false,
  });
}
