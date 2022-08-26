export const isTextInObjectKeys = (obj: Object, text: string) =>
  Object.keys(obj).some((key) => key === text);
