import compress from 'vite-plugin-compress';
import { minifyHtml } from 'vite-plugin-html';

const config = {
  plugins: [
    compress({
      brotli: false
    }),
    minifyHtml()
  ],
};

export default config;
