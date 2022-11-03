import { normalizePath } from 'vite';
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import viteEslint from 'vite-plugin-eslint';
import StylelintPlugin from 'vite-plugin-stylelint';

const variablePath = normalizePath(path.resolve('./src/assets/variable.less'));

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 5000,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
	},
	css: {
		postcss: {
			plugins: [
				{
					postcssPlugin: 'internal:charset-removal',
					AtRule: {
						charset: (atRule) => {
							if (atRule.name === 'charset') {
								atRule.remove();
							}
						},
					},
				},
			],
		},
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				additionalData: `@import "${variablePath}";`
			},
		}
	},
	plugins: [
		react(),
		viteEslint(),
		StylelintPlugin(),
	]
});
