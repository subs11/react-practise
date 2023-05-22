import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@comp": path.resolve(__dirname, "./src/components"),
    },
  },

  server: {
    proxy: {
      "/api1": {
        //目标地址:
        target: "https://api.github.com",
        //开启代理
        changeOrigin: true,
        //重写路径,去掉代理前缀
        rewrite: (path) => path.replace(/^\/api1/, ""),
      },
      "/api2": {
        //目标地址:
        target: "http://127.0.0.1:8000",
        //开启代理
        changeOrigin: true,
        //重写路径,去掉代理前缀
        rewrite: (path) => path.replace(/^\/api2/, ""),
      },
    },
  },
});
