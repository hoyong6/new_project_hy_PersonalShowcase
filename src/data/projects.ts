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
    title: "AI Coding 个人新博客",
    period: "2026.06 - 长期维护",
    summary: "AI coding 辅助完成的新一代个人博客，覆盖博客前后台、旧内容迁移、线上部署和内容发布 workflow。",
    stack: ["Next.js", "TypeScript", "MongoDB", "Docker", "Nginx", "AI Coding"],
    achievements: [
      "用 AI 协作完成需求拆解、Next.js App Router 页面/API、MongoDB 模型、Markdown 渲染、图片上传和权限控制",
      "沉淀 Docker Compose、Nginx HTTPS、SSH/rsync 部署脚本与部署文档，支持 blog.akkc38.cn 持续更新",
      "定制博客写作与落库 Skill，将 Markdown 文章、slug、标签和数据库同步流程标准化",
    ],
  },
];
