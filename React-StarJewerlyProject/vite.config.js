import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Ecommerce-StarJewerly/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/styles.scss";`,
      },
    },
  },
});
