import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import styleX from 'vite-plugin-stylex'

export default defineConfig({
  base: '/TW-Values/',
  plugins: [react(), viteTsconfigPaths(), styleX()],
  server: {
    open: true,
    port: 3000,
  },
})
