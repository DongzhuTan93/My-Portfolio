/** @type {import('next').NextConfig} */

const nextConfig = {
        reactStrictMode: true,
        images: {
          domains: [],
          formats: ['image/avif', 'image/webp'], // In Next.js, these formats can be specified in the next.config.js or next.config.mjs file under the images section. By declaring these formats, you enable the Next.js image optimization feature to automatically handle images in these formats if they're used on your site.
        },
}

export default nextConfig
