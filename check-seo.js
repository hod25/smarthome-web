#!/usr/bin/env node

const https = require('https');
const xml2js = require('xml2js');

// בדיקת sitemap באתר
function checkSitemap(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log(`✅ ${url} - Status: ${res.statusCode}`);
          console.log('תוכן:', data.substring(0, 200) + '...');
          resolve(data);
        } else {
          console.log(`❌ ${url} - Status: ${res.statusCode}`);
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    }).on('error', reject);
  });
}

// בדיקת כל הקישורים
async function validateSEO() {
  console.log('🔍 בודק SEO ו-Sitemap...\n');
  
  try {
    // בדיקת sitemap.xml
    await checkSitemap('https://smarthome.7112000.xyz/sitemap.xml');
    console.log('\n');
    
    // בדיקת robots.txt
    await checkSitemap('https://smarthome.7112000.xyz/robots.txt');
    console.log('\n');
    
    // בדיקת עמודים עיקריים
    const pages = [
      'https://smarthome.7112000.xyz/',
      'https://smarthome.7112000.xyz/about',
      'https://smarthome.7112000.xyz/en',
      'https://smarthome.7112000.xyz/de'
    ];
    
    for (const page of pages) {
      try {
        await checkSitemap(page);
        console.log('\n');
      } catch (err) {
        console.log(`❌ ${page} - שגיאה: ${err.message}\n`);
      }
    }
    
  } catch (error) {
    console.error('שגיאה בבדיקה:', error.message);
  }
}

validateSEO();
