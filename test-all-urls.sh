#!/bin/bash

echo "🔍 בדיקת כל הקישורים בסיטמאפ"
echo "================================="

urls=(
    "https://smarthome.7112000.xyz/"
    "https://smarthome.7112000.xyz/about"
    "https://smarthome.7112000.xyz/en"
    "https://smarthome.7112000.xyz/de"
    "https://smarthome.7112000.xyz/en/about"
    "https://smarthome.7112000.xyz/de/about"
)

for url in "${urls[@]}"; do
    echo "בדיקה: $url"
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    if [ "$status" = "200" ]; then
        echo "✅ $url - OK"
    else
        echo "❌ $url - Error: $status"
    fi
done

echo ""
echo "🎯 אם כל הקישורים מחזירים 200 - Google יקרא את הסיטמאפ!"
