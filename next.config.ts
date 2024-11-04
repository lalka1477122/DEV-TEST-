// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Оптимизация импорта пакетов для уменьшения размера бандла
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    // Разрешенные домены для загрузки изображений
    domains: [
      'avatars.githubusercontent.com',
      'emojik.com', // Добавьте новый домен здесь
    ],
  },
};

export default nextConfig;
