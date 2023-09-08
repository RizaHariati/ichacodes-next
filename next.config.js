/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : "standalone",
  images:
    process.env.NODE_ENV === "production"
      ? {
          loader: "custom",
          loaderFile: "./loader.ts",
          path: "https://www.ichacodes.com/",
        }
      : {
          loader: "default",
        },

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
