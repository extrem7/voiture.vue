/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV: 'local' | 'production'
  readonly VITE_API_KEY: string
  readonly VITE_LANG_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
