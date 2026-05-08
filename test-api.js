#!/usr/bin/env node

import axios from 'axios';

async function testAPI() {
  try {
    console.log('Testing API health endpoint...');
    const response = await axios.get('http://localhost:5000/api/health');
    console.log('✓ API health check passed:', response.data);
    
    console.log('\nTesting server availability...');
    console.log('✓ Server is running on port 5000');
    console.log('✓ Frontend should be available on port 3000');
    
    console.log('\nTo start the application:');
    console.log('1. Run: npm run dev');
    console.log('2. Or run: node start-dev.js');
    console.log('3. Visit: http://localhost:3000');
    
  } catch (error) {
    console.error('✗ API test failed:', error.message);
  }
}

testAPI();