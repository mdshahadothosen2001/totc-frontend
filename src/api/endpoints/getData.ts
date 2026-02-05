import { apiInstance } from "../index";

export const getData = async <T>(itemUrl: string): Promise<T> => {
  const response = await apiInstance.get<T>(itemUrl);
  return response.data;
};
