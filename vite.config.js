import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';

const root = import.meta.dirname;

// Mirrors Vercel's `cleanUrls` in dev: /sobre -> /sobre.html, so local
// links and navigation behave the same as production.
function cleanUrls() {
  return {
    name: 'clean-urls-dev',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url && url !== '/' && !url.includes('.') && existsSync(resolve(root, `.${url}.html`))) {
          req.url = `${url}.html`;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [cleanUrls()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        sobre: resolve(root, 'sobre.html'),
        criadores: resolve(root, 'criadores.html'),
        servicos: resolve(root, 'servicos.html'),
        marcas: resolve(root, 'marcas.html'),
        contacto: resolve(root, 'contacto.html'),
      },
    },
  },
});
