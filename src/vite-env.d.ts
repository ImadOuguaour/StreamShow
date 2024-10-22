/// <reference types="vite/client" />
/// <reference types="vitest" />

interface ImportMetaEnv {
    readonly VITE_TMDB_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
  