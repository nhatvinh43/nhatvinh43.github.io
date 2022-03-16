import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import legacy from "@vitejs/plugin-legacy";
import viteCompression from "vite-plugin-compression";
import path from "path";

const HOST = "0.0.0.0";
const REPLACEMENT = `${path.resolve(__dirname, "./src")}/`;

export default (/** if you want to use mode : { mode }*/) => {
  return defineConfig({
    base: "./",
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/_variables.scss";`,
        },
      },
    },
    server: {
      host: HOST,
      port: process.env.PORT,
    },
    resolve: {
      alias: [
        {
          find: "@/",
          replacement: REPLACEMENT,
        },
        {
          find: "src/",
          replacement: REPLACEMENT,
        },
      ],
    },
    plugins: [
      createVuePlugin(/* options */),
      legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
      viteCompression(),
    ],
  });
};
