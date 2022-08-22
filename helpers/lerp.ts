export const lerp = (start: number, end: number, ease: number) =>
  (1 - ease) * start + ease * end;
