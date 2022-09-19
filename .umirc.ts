import { defineConfig } from 'dumi';

export default defineConfig({
  title: '组件库规范文档',
  favicon: 'http://scrmtest.changan.com.cn/app-b/assets/13a418433765d8199a99.png',
  logo: 'http://scrmtest.changan.com.cn/app-b/assets/13a418433765d8199a99.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // mfsu: {
  //   development: {
  //     output: './.mfsu',
  //   },
  //   production: {
  //     output: '.mfsu-production',
  //   },
  // },
  // more config: https://d.umijs.org/config
  base: '/components-doc',
  publicPath: '/components-doc/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
});
