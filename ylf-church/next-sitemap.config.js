/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:          process.env.NEXT_PUBLIC_SITE_URL || 'https://yeshuaslovefamily.com',
  generateRobotsTxt:true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [`${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`],
  },
  exclude: ['/studio/*', '/api/*'],
  changefreq: 'weekly',
  priority:   0.7,
}
