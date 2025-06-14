import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const owner = "astrojs";
// https://astro.build/config
export default defineConfig({
  site: 'https://ayush-08-beep.github.io/real-ministry-of-ayush/',
  integrations: [tailwind()],
});
