export type Project = {
  title: string;
  period: string;
  summary: string;
  stack: string[];
  achievements: string[];
};

export const projects: Project[] = [
  {
    title: "KMS-Wallet 内部多签钱包",
    period: "2024.10 - 2024.12",
    summary: "基于 Plasmo 的浏览器插件钱包，用于公司内部多签钥匙管理。",
    stack: ["Plasmo", "React", "TypeScript", "Tailwind CSS", "Chrome Extension"],
    achievements: ["主导插件钱包系统开发", "实现私钥生成、本地加密存储、登录校验与延迟锁定", "调研 Unisat 钱包业务原理并落地到内部场景"],
  },
  {
    title: "Drago 官网与浏览器插件",
    period: "2023.11 - 2024.01",
    summary: "钱包资产检索与分析平台，插件侧支持页面内资产查询与危险地址感知。",
    stack: ["Vite", "React", "TypeScript", "Plasmo", "Ant Design"],
    achievements: ["重构 Vite 打包架构，支持 PC 与移动端独立打包", "用 Plasmo 解决内容脚本插入与热更新效率问题", "处理 Ant Design 在 content 页面中的样式兼容"],
  },
  {
    title: "Alias 官网与 Telegram Mini App",
    period: "2024.05 - 2024.07",
    summary: "AI + 区块链项目展示官网与 Telegram 小程序，用于用户引导和任务体系。",
    stack: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Telegram Mini App"],
    achievements: ["负责官网视觉展示与动效实现", "解决 Telegram 小程序滑动兼容与实时开发调试问题", "按期完成官网与小程序开发部署"],
  },
  {
    title: "Chemix LaunchPad",
    period: "2021.08 - 2023.05",
    summary: "面向首次代币发行的 LaunchPad 平台，支持多链资产申购与拍卖业务。",
    stack: ["Vue", "Web3", "MetaMask", "WalletConnect", "Tailwind CSS"],
    achievements: ["独立负责前端整体开发与维护", "处理钱包适配、合约调用、多链切换与线上问题", "协调设计、后端和智能合约开发推进业务上线"],
  },
  {
    title: "个人技术博客",
    period: "长期维护",
    summary: "自部署博客，记录前端、Web3、安全、浏览器插件和工程化实践。",
    stack: ["Vue", "Nuxt", "Koa2", "MongoDB", "PM2", "Nginx"],
    achievements: ["独立部署并维护博客系统", "沉淀 React Hooks、插件开发、Web3 和安全相关笔记", "作为后续新博客升级的内容基础"],
  },
];
