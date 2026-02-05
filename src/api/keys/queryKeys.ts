export const queryKeys = {
  getDataKeys: (key: string, itemUrl?: string) => itemUrl ? [key, itemUrl] as const : [key] as const,
};

export default queryKeys;
