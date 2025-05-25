/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://soinglobal.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
