import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { pageData } from "./src/assets/data";

export default defineConfig({
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  root: "src",
  plugins: [
    handlebars({
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
  ],
});
