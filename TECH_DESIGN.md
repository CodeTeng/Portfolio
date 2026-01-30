# 技术设计

## 技术栈
- Vue3（Composition API） + TypeScript + Vite
- Tailwind CSS
- Ant Design Vue（组件库 如有需要）
- Vue Router（如果需要多页面）
- @vueuse/motion（动画效果）

## 项目结构
src/
  components/          # 通用业务组件
    Header.vue
    Hero.vue
    About.vue
    Projects.vue
    Footer.vue
  data/                # 静态数据
    projects.ts
    skills.ts
  router/              # Vue Router 路由配置（对应路由需求）
    index.ts
  views/               # 页面级组件（如果需要多页面）
  App.vue              # 根组件
  main.ts              # 入口文件
  env.d.ts             # TypeScript 环境类型声明

## 数据管理
- 项目数据和技能数据存储在 TypeScript 文件中
- 使用数组存储，方便后续添加和修改
