module.exports = {
  i18n: {
    locales: ['he', 'en', 'de'],
    defaultLocale: 'he',
    localeDetection: false // ביטול זיהוי אוטומטי לפי דפדפן
  },
  trailingSlash: false,
  generateEtags: false,
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ['smarthome.7112000.xyz'],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};