import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Encontre a regra existente que processa imagens e exclua os SVGs dela
    const fileLoaderRule = config.module.rules.find(
      (rule: any) =>
        rule.test instanceof RegExp && rule.test.test(".svg")
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Adicione a regra para processar SVGs com @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/] // Certifica que só será aplicado a arquivos JS/TS
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
