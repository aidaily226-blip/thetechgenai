/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://thetechgenai.com',
  generateRobotsTxt: false, // we have our own robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    '/404',
    '/500',
    '/api/*',
  ],
  additionalPaths: async (config) => [
    {
      loc: 'https://thetechgenai.com/',
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      loc: 'https://thetechgenai.com/blog',
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      loc: 'https://thetechgenai.com/services',
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      loc: 'https://thetechgenai.com/portfolio',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://thetechgenai.com/about',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://thetechgenai.com/contact',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://thetechgenai.com/category/ai-news',
      changefreq: 'daily',
      priority: 0.8,
    },
    {
      loc: 'https://thetechgenai.com/category/tech',
      changefreq: 'daily',
      priority: 0.8,
    },
    {
      loc: 'https://thetechgenai.com/category/gadgets',
      changefreq: 'daily',
      priority: 0.8,
    },
    {
      loc: 'https://thetechgenai.com/category/ai-tools',
      changefreq: 'daily',
      priority: 0.8,
    },
    {
      loc: 'https://thetechgenai.com/category/make-money',
      changefreq: 'daily',
      priority: 0.8,
    },
  ],
  transform: async (config, path) => {
    // Give blog posts higher priority
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }
    // Default
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
