#!/usr/bin/env node

import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('🚀 Building for GitHub Pages...');

try {
  // Clean previous build
  if (existsSync('docs')) {
    rmSync('docs', { recursive: true, force: true });
  }

  // Build the project (client only)
  console.log('📦 Building React app...');
  execSync('npx vite build', { stdio: 'inherit' });

  // Create docs directory for GitHub Pages
  mkdirSync('docs', { recursive: true });

  // Copy built files from dist/public to docs
  console.log('📂 Copying files to docs folder...');
  execSync('cp -r dist/public/* docs/', { stdio: 'inherit' });

  // Create .nojekyll file to prevent Jekyll processing
  execSync('touch docs/.nojekyll');

  console.log('✅ Build complete! Files are ready in the docs folder.');
  console.log('📖 Next steps:');
  console.log('1. git add .');
  console.log('2. git commit -m "Deploy to GitHub Pages"');
  console.log('3. git push origin main');
  console.log('4. In GitHub Settings → Pages, select "Deploy from a branch" and choose main/docs');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}