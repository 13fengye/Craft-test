/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home', // 默认页面
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig
