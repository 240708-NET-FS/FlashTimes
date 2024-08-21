import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const tsconfigPaths = await import('vite-tsconfig-paths').then(
    (mod) => mod.default,
  );

  return {
    plugins: [react(), tsconfigPaths()],
  };
});
