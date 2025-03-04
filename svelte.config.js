import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: vitePreprocess(),
  
	kit: {
	  adapter: adapter(),
	  // Configurazione aggiuntiva del kit
	},
  
	// Configurazione di Vite separata dal kit
	vite: {
	  resolve: {
		alias: {
		  'bootstrap-italia': path.resolve('node_modules/bootstrap-italia'),
		},
	  },
	},
  };

export default config;
