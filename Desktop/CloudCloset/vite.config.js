import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'CloudCloset',
        short_name: 'CloudCloset',
        description: 'Drop Box Clone',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logoCloud.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'logoCloud.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
