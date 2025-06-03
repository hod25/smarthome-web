#!/bin/bash
# עדכון אתר הבית החכם לגרסה העדכנית מה־Git והעלאה אוטומטית

set -e

REPO_URL="https://github.com/hod25/smarthome-web.git" # שנה לכתובת ה־Git שלך
PROJECT_DIR="/var/www/smart_home" # שנה לנתיב בו האתר שלך מותקן
TMP_DIR="/tmp/smart_home_update_$(date +%s)"

# שלב 1: הורדת הגרסה העדכנית מה־Git
rm -rf "$TMP_DIR"
git clone "$REPO_URL" "$TMP_DIR"

# שלב 2: התקנת תלויות
cd "$TMP_DIR"
npm ci || npm install

# שלב 3: בניית הפרויקט
npm run build

# שלב 4: גיבוי הגרסה הנוכחית
BACKUP_DIR="${PROJECT_DIR}_backup_$(date +%Y%m%d_%H%M%S)"
cp -r "$PROJECT_DIR" "$BACKUP_DIR"

# שלב 5: החלפת הגרסה הישנה בחדשה
rm -rf "$PROJECT_DIR"
mv "$TMP_DIR" "$PROJECT_DIR"

# שלב 6: ניקוי זמני
rm -rf "$TMP_DIR"

echo "האתר עודכן בהצלחה! גיבוי נשמר ב-$BACKUP_DIR"
