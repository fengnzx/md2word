#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Starting Markdown to Word Converter in development mode...');

// Ensure uploads directory exists
const fs = import('fs').then(({ default: fs }) => {
  const uploadsDir = join(__dirname, 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log('Created uploads directory');
  }

  // Start backend server
  console.log('Starting backend server...');
  const backend = spawn('npx', ['tsx', 'server.ts'], {
    cwd: join(__dirname, 'backend'),
    stdio: 'inherit'
  });

  backend.on('error', (err) => {
    console.error('Failed to start backend:', err);
  });

  // Start frontend server in a moment
  setTimeout(() => {
    console.log('Starting frontend server...');
    const frontend = spawn('npx', ['vite'], {
      cwd: join(__dirname, 'src'),
      stdio: 'inherit'
    });

    frontend.on('error', (err) => {
      console.error('Failed to start frontend:', err);
    });
  }, 1000);
});