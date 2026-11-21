import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://amirrezashapouri.com",
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
