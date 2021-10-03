module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    MARVEL_PUBLIC_KEY: process.env.MARVEL_PUBLIC_KEY,
    MARVEL_PRIVATE_KEY: process.env.MARVEL_PRIVATE_KEY,
    TIMESTAMP: process.env.TIMESTAMP,
  }
};
