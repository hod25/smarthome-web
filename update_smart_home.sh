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

# אפשרות 1: PM2
if command -v pm2 &> /dev/null; then
    pm2 restart smart_home
else
    # אפשרות 2: הרצה עם npm
    npm start &
fi

echo "✅ Deployment completed successfully."
