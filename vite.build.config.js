import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-statistic",
            entry: "ilw-statistic.js",
            fileName: "ilw-statistic",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-statistic.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
