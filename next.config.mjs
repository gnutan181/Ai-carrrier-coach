/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint :{
        ignoreDuringBuilds :true
      },
    images:{
        remotePatterns : [
            {
                protocol : "https",
                hostname : "randomuser.me"
            }
        ]
    }
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   eslint :{
//     ignoreDuringBuilds :true
//   },
//   typescript:{
// ignoreBuildErrors :true
//   }
// };

// export default nextConfig;
