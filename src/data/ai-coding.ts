export const aiCodingWorkflow = [
  {
    title: '新博客端到端搭建',
    detail:
      '从 Next.js App Router、MongoDB/Mongoose、Markdown 渲染、登录态、文章 CRUD 到图片上传，AI 辅助完成骨架生成、边界拆分和交互修正。',
  },
  {
    title: '部署与运维脚本',
    detail:
      "沉淀 Docker Compose、Nginx 反代、Let's Encrypt HTTPS、SSH/rsync 发布脚本，覆盖环境同步、镜像构建、容器启动和证书续期记录。",
  },
  {
    title: '内容生产 Skill',
    detail:
      '围绕博客发布流程定制 AI 写作与落库 workflow，把 Markdown 文章、slug、标签、数据库同步和线上校验变成可复用流程。',
  },
  {
    title: '体验与性能迭代',
    detail:
      '持续用 AI 做页面结构、滚动加载、摘要清洗、代码高亮、移动端细节和线上反馈修正，让个人项目从能跑推进到可长期维护。',
  },
] as const;

export const aiCodingMetrics = [
  { value: '博客', label: '线上 Next.js 博客' },
  { value: '自动化', label: '发布/迁移/图片脚本' },
  { value: 'HTTPS', label: 'Nginx + Docker 部署' },
  { value: 'Skill', label: '博客写作落库流程' },
] as const;
