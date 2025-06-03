#!/bin/bash

set -e  # עצור אם יש שגיאה כלשהי

# === הגדרות ===
REPO_URL="https://github.com/hod25/smarthome-web.git"
PROJECT_DIR="/var/www/smarthome"  # שנה לנתיב בו האתר מותקן
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
TEMP_DIR="/tmp/smart_home_update_$TIMESTAMP"

echo "📦 Removing temporary directory if it exists..."
rm -rf "$TEMP_DIR"

echo "📥 Cloning from Git repository..."
git clone "$REPO_URL" "$TEMP_DIR"

echo "📦 Installing npm packages..."
cd "$TEMP_DIR"
if [ -f "package-lock.json" ]; then
    npm ci
else
    npm install
fi

echo "⚙️ Building the project..."
npm run build

echo "🚚 Replacing old version..."
cd /

if [[ -n "$PROJECT_DIR" && "$PROJECT_DIR" != "/" && "$PROJECT_DIR" != "$TEMP_DIR" ]]; then
    # צור את התיקיה אם לא קיימת
    mkdir -p "$(dirname "$PROJECT_DIR")"

    # מחק אם יש גרסה קודמת
    if [ -d "$PROJECT_DIR" ]; then
        rm -rf "$PROJECT_DIR"
    fi

    mv "$TEMP_DIR" "$PROJECT_DIR"
else
    echo "❌ ERROR: PROJECT_DIR='$PROJECT_DIR' is invalid or unsafe. Aborting."
    exit 1
fi

echo "🔁 Starting the service..."
cd "$PROJECT_DIR"

#echo "🔁 Restarting or starting service with PM2..."

if command -v pm2 &> /dev/null; then
    # אם האפליקציה כבר קיימת - רק עשה restart
    if pm2 list | grep -q "smart_home"; then
        pm2 restart smart_home
    else
        # אם לא קיימת, תפעיל אותה מחדש
        pm2 start npm --name "smart_home" -- start
    fi
    pm2 save
else
    echo "❌ PM2 is not installed. Please install it with: npm install -g pm2"
    exit 1
fi

echo "✅ Deployment completed successfully."
