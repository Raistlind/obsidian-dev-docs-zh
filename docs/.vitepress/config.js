import { contentsNote } from "../sidebar/contents"

export default {
  title: 'Obsidian 开发者文档',
  base: "/",
  description: "根据Obsidian官方开发者文档进行翻译",
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  head: [
    // 添加图标
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  ],
  // 主题配置
  themeConfig: {
    siteTitle: "Obsidian 开发者文档",
    logo: "/logo.svg",
    sidebar: contentsNote,

    // 头部导航栏配置
    // nav: topNav,
    // search: {
    //   provider: "local",
    // },
  },

}