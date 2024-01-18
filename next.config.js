/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'thomas-m-bucket.s3.eu-west-3.amazonaws.com',
            },
        ],
    },
}

module.exports = nextConfig
