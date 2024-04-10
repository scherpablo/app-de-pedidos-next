/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
        // domains: ['**.com'],
        // dangerouslyAllowSVG: true,
        // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        // unoptimized: true,
    }
};

export default nextConfig;
