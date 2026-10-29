import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/frontend-interview-practice/" : "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          return id.includes("/questions/translations/bg/") ? "bulgarian-content" : undefined;
        },
      },
    },
  },
});
