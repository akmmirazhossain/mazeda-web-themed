// next.config.mjs

const nextConfig = {
  reactStrictMode: true,
  images: {
    // Specify remote patterns for image domains
    remotePatterns: [
      // Define the remote pattern with hostname
      {
        // Hostname of the remote image domain
        hostname: "new.mazedanetworks.net",
        // Regular expression pattern to match the URLs of remote images
        // Here, we use a pattern that matches URLs starting with "http://" or "https://" followed by "new.mazedanetworks.net/"
      },
    ],
  },
};

// module.exports = {
//   images: {
//     domains: ["new.mazedanetworks.net"],
//   },
// };

export default nextConfig;
