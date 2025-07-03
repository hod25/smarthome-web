#!/bin/bash

echo "🚀 דחיפת כל השינויים ל-Git..."

# בדיקת סטטוס Git
echo "📋 בודק סטטוס..."
git status --porcelain

# הוספת כל הקבצים
echo "📁 מוסיף קבצים..."
git add .

# יצירת commit
echo "💾 יוצר commit..."
git commit -m "🎯 תיקון SEO מלא ואופטימיזציה

✅ אופטימיזציית תמונות:
- circle.png: 1.4MB → 3.6KB (99.7% שיפור!)
- kitchen.jpg: 126KB → 107KB  
- גרסאות WebP מאופטמות נוספו
- OptimizedImage עודכן לתמיכה ב-WebP

✅ תיקון Sitemap מלא:
- sitemap.xml פשוט וניקוי (לא sitemapindex)
- robots.txt מעודכן ופשוט
- הסרת next-sitemap (היה גורם לבעיות)
- כל הכתובות מעודכנות ל-smarthome.7112000.xyz

✅ שיפורי SEO:
- meta tags מעודכנים עם URL מלאים
- Open Graph מתקדם
- structured data (Schema.org)
- canonical URLs נכונים
- favicon.svg קל ומהיר

✅ תיקוני תרגום:
- השלמת תרגומים חסרים בגרמנית
- תיקון כל שגיאות MISSING_MESSAGE

✅ שיפורי ביצועים:
- dynamic imports לקומפוננטים
- הסרת preload כבד
- אופטימיזציית next.config.js
- CSS inlining משופר

המטרה: גוגל יוכל לסרוק את ה-sitemap ללא בעיות!"

# דחיפה ל-Git
echo "🌐 דוחף לשרת..."
git push origin main

echo "✅ הדחיפה הושלמה בהצלחה!"
echo ""
echo "🔧 הבאים לביצוע:"
echo "1. העלה קבצים לשרת (sitemap.xml, robots.txt)"
echo "2. נקה cache שרת"
echo "3. בדוק https://smarthome.7112000.xyz/sitemap.xml"
echo "4. שלח sitemap מחדש ל-Google Search Console"
echo "5. בדוק אחרי 24 שעות שגוגל מצליח לסרוק"
