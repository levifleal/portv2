/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'placehold.co',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'ui-avatars.com',
          port: '',
          pathname: '/api/**',
        },
        {
          protocol: 'https',
          hostname: 'instagram.fcpq17-1.fna.fbcdn.net',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  