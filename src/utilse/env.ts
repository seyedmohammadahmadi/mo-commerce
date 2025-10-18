// src/utils/env.ts
export const isDev = import.meta.env.DEV;

// همیشه trailing slash داشته باشد
const BASE = (import.meta.env.BASE_URL || "/").endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

// بساز: /mo-commerce/data/<file> یا /data/<file>
export const dataUrl = (file: string) => `${BASE}data/${file}`;