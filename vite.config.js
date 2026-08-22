import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const root = import.meta.dirname;

export default defineConfig({
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
