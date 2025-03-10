import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio",

  plugins: [react()],
  assetsInclude: ["**/*.png", "**/*.PNG", "**/*.jpg", "**/*.jpeg", "**/*.gif"], // Add other asset types as needed
});
