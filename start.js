#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Starting Markdown to Word Converter...');

// Install dependencies if not already installed
const installProcess = spawn('npm', ['install'], {
  cwd: __dirname,
  stdio: 'inherit'
});

installProcess.on('close', (code) => {
  if (code !== 0) {
    console.error('Failed to install dependencies');
    process.exit(code);
  }
  
  console.log('Dependencies installed successfully');
  
  // Build the project
  console.log('Building the project...');
  const buildProcess = spawn('npm', ['run', 'build'], {
    cwd: __dirname,
    stdio: 'inherit'
  });
  
  buildProcess.on('close', (code) => {
    if (code !== 0) {
      console.error('Build failed');
      process.exit(code);
    }
    
    console.log('Build completed successfully');
    console.log('Starting the application...');
    
    // Start the application
    const startProcess = spawn('node', ['start-dev.js'], {
      cwd: __dirname,
      stdio: 'inherit'
    });
    
    startProcess.on('error', (err) => {
      console.error('Failed to start application:', err);
    });
  });
});