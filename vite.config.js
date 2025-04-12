import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://mern-back-production-aab8.up.railway.app',
        changeOrigin: true,
        secure: true,
        // Important: allow cookies to pass through
        configure: (proxy) => {
          proxy.on('proxyRes', (proxyRes) => {
            const cookies = proxyRes.headers['set-cookie'];
            if (cookies) {
              proxyRes.headers['set-cookie'] = cookies.map(cookie =>
                cookie
                  .replace(/; Secure/gi, '') // Optional if you're on HTTP locally
              );
            }
          });
        }
      }
    }
  }
})
