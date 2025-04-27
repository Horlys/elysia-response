import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  minify: "terser",
  outDir: "dist",
  sourcemap: false,
  splitting: false,
  treeshake: true,
  bundle: true,
  target: "node20",
});
