/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["placehold.co"],
  },
  compiler:{
    styledComponents: {ssr:false},
  },
};

module.exports = nextConfig;
