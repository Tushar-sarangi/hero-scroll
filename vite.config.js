import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "./", // <-- use relative paths for main branch deployment
  plugins: [react()],
})
