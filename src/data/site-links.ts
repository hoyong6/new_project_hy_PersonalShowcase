export type SiteLinkStatus = 'live' | 'coming-soon';

export type SiteLink = {
  title: string;
  description: string;
  url?: string;
  status: SiteLinkStatus;
  type: 'case' | 'blog';
  external: boolean;
  enabled: boolean;
};

export const siteLinks: SiteLink[] = [
  {
    title: 'Alias 旧官网案例',
    description: '曾经负责的 AI + 区块链展示官网，展示动画、视觉和移动端适配能力。',
    url: 'https://www.akkc38.cn/aliasweb',
    status: 'live',
    type: 'case',
    external: true,
    enabled: true,
  },
  {
    title: '个人技术博客',
    description: '技术笔记与项目复盘，包含 React、浏览器插件、Web3、安全、工程化等内容。',
    url: 'https://blog.akkc38.cn/',
    status: 'live',
    type: 'blog',
    external: true,
    enabled: true,
  },
  {
    title: '旧个人博客',
    description: '旧版博客入口仍然保留，方便查看历史文章、旧内容和迁移前记录。',
    url: 'https://www.akkc38.cn/',
    status: 'live',
    type: 'blog',
    external: true,
    enabled: true,
  },
];
