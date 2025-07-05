#!/bin/bash

echo "🔍 בדיקת SEO ו-Sitemap"
echo "========================="

echo ""
echo "1. בדיקת Sitemap:"
curl -s "https://smarthome.7112000.xyz/sitemap.xml" | head -5

echo ""
echo "2. בדיקת Robots.txt:"
curl -s "https://smarthome.7112000.xyz/robots.txt"

echo ""
echo "3. פינג לגוגל (שליחת Sitemap):"
curl -s "https://www.google.com/ping?sitemap=https://smarthome.7112000.xyz/sitemap.xml"

echo ""
echo "4. בדיקת נגישות העמוד הראשי:"
curl -s -I "https://smarthome.7112000.xyz/" | grep "HTTP"

echo ""
echo "✅ בדיקות הושלמו!"
echo ""
echo "📋 השלבים הבאים:"
echo "1. לך ל-Google Search Console"
echo "2. הוסף sitemap.xml"  
echo "3. חכה 24-48 שעות"
echo "4. בדוק Status"
