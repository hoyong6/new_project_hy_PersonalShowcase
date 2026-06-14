export type SiteLinkStatus = "live" | "coming-soon";

export type SiteLink = {
  title: string;
  description: string;
  url?: string;
  status: SiteLinkStatus;
  type: "case" | "blog" | "future";
  external: boolean;
  enabled: boolean;
};

export const siteLinks: SiteLink[] = [
  {
    title: "Alias 旧官网案例",
    description: "曾经负责的 AI + 区块链展示官网，重点展示动画、视觉和移动端适配能力。",
    url: "https://www.akkc38.cn/aliasweb",
    status: "live",
    type: "case",
    external: true,
    enabled: true,
  },
  {
    title: "当前个人博客",
    description: "技术笔记与项目复盘，包含 React、浏览器插件、Web3、安全、工程化等内容。",
    url: "https://www.akkc38.cn/",
    status: "live",
    type: "blog",
    external: true,
    enabled: true,
  },
  {
    title: "新博客预留位",
    description: "后续新博客上线后，只需要在配置中补充 URL 并切换状态即可显示为正式入口。",
    status: "coming-soon",
    type: "future",
    external: true,
    enabled: true,
  },
];
