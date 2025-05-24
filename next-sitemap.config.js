module.exports = {
  siteUrl: "https://soinglobal.com",
  generateRobotsTxt: true,
  exclude: ["/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/*"],
      },
    ],
  },
};
