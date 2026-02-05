/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiInstance, authInstance } from "../api/index";

interface MutationOptions<T = unknown> {
  invalidateKey?: (string | number)[];
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
}

// ✅ Generic POST hook
// Supports both static URLs and dynamic URL builders
export function usePost<T, U>(
  itemUrl: string,
  options?: MutationOptions<T>
): ReturnType<typeof useMutation<T, Error, U>>;
export function usePost<T, U>(
  urlBuilder: (data: U) => string,
  options?: MutationOptions<T>
): ReturnType<typeof useMutation<T, Error, U>>;
export function usePost<T, U>(
  itemUrlOrBuilder: string | ((data: U) => string),
  options?: MutationOptions<T>
) {
  const queryClient = useQueryClient();

  return useMutation<T, Error, U>({
    mutationFn: (data: U) => {
      const url =
        typeof itemUrlOrBuilder === "function"
          ? itemUrlOrBuilder(data)
          : itemUrlOrBuilder;

      return apiInstance.post<T>(url, data).then((res) => {
        if (res.status === 204) {
          return {} as T;
        }
        return res.data;
      });
    },
    onSuccess: (data) => {
      if (options?.invalidateKey) {
        options.invalidateKey.forEach((key) => {
          if (typeof key === "string") {
            queryClient.invalidateQueries({
              predicate: (query) => {
                const queryKey = query.queryKey[0];
                return typeof queryKey === "string" && queryKey.startsWith(key);
              },
            });
          }
        });
      }

      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// ✅ Generic PATCH hook
export const usePatch = <T, U>(
  itemUrl: string,
  options?: MutationOptions<T>
) => {
  const queryClient = useQueryClient();

  return useMutation<T, Error, U>({
    mutationFn: (data: U) =>
      apiInstance.patch<T>(itemUrl, data).then((res) => {
        if (res.status === 204) {
          return {} as T;
        }
        return res.data;
      }),
    onSuccess: (data) => {
      if (options?.invalidateKey) {
        options.invalidateKey.forEach((key) => {
          if (typeof key === "string") {
            queryClient.invalidateQueries({
              predicate: (query) => {
                const queryKey = query.queryKey[0];
                return typeof queryKey === "string" && queryKey.startsWith(key);
              },
            });
          }
        });
      }

      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
};

// ✅ Generic DELETE hook
export const useDelete = <T>(itemUrl: string, options?: MutationOptions<T>) => {
  const queryClient = useQueryClient();

  return useMutation<T, Error, string>({
    mutationFn: (id: string) =>
      apiInstance.delete<T>(`${itemUrl}/${id}/`).then((res) => res.data),
    onSuccess: (data) => {
      if (options?.invalidateKey) {
        options.invalidateKey.forEach((key) => {
          if (typeof key === "string") {
            queryClient.invalidateQueries({
              predicate: (query) => {
                const queryKey = query.queryKey[0];
                return typeof queryKey === "string" && queryKey.startsWith(key);
              },
            });
          }
        });
      }

      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
};

// ✅ Generic Auth POST hook (uses authInstance for unauthenticated endpoints)
export const useAuthPost = <T, U>(itemUrl: string, options?: MutationOptions<T>) => {
  const queryClient = useQueryClient();

  return useMutation<T, Error, U>({
    mutationFn: (data: U) => authInstance.post<T>(itemUrl, data).then((res) => res.data),
    onSuccess: (data) => {
      if (options?.invalidateKey) {
        options.invalidateKey.forEach((key) => {
          if (typeof key === "string") {
            queryClient.invalidateQueries({
              predicate: (query) => {
                const queryKey = query.queryKey[0];
                return typeof queryKey === "string" && queryKey.startsWith(key);
              },
            });
          }
        });
      }

      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
};
