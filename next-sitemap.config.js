/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://smarthome.7112000.xyz',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 50000, // הגדלת הגודל כדי למנוע פיצול
  generateIndexSitemap: false, // ביטול index sitemap
  exclude: ['/server-sitemap.xml'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/en'),
    await config.transform(config, '/de'),
    await config.transform(config, '/about'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://smarthome.7112000.xyz/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    const priority = path === '/' ? 1.0 : 
                    path.includes('/en') || path.includes('/de') ? 0.9 : 
                    path.includes('/about') ? 0.8 : 0.7;
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  },
};
