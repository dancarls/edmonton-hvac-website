
/// <reference types="vite/client" />

// Global type declarations
declare global {
  interface Window {
    REACT_APP_NAVIGATE?: (path: string) => void;
  }
}

export {};
