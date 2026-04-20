import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const src = resolve('dist/index.html');
const dst = resolve('dist/404.html');

if (!existsSync(src)) {
  console.error('[copy-404] dist/index.html not found — did vite build succeed?');
  process.exit(1);
}

copyFileSync(src, dst);
console.log('[copy-404] dist/404.html written (GitHub Pages SPA fallback)');
