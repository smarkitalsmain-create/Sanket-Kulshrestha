/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional JSON form endpoint for the contact form (e.g. Formspree). Public: never put secrets here. */
  readonly VITE_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
