import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base:
    process.env.GITHUB_PAGES === "true"
      ? "/chop-chop-restaurant/"
      : "/",
  plugins: [tailwindcss()],
});
