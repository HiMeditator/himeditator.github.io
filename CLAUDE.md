# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

个人网站，展示个人简介、技能、项目和博客。使用 React + TypeScript + Vite 构建。

## 开发命令

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览生产构建
```

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite 5
- **路由**: React Router DOM v6
- **样式**: UnoCSS (原子化 CSS，presetUno + presetIcons + presetWebFonts)
- **图标**: Phosphor Icons
- **主题**: 自定义亮色/暗色主题，通过 ThemeContext 管理，存储在 localStorage

## 架构

```
src/
├── pages/              # 页面组件
│   ├── Home.tsx
│   ├── Profile.tsx
│   ├── Blogs.tsx
│   └── Projects/       # 项目详情页
├── components/         # 可复用组件
│   ├── Layout/         # 布局组件 (Header, Footer, Layout)
│   ├── Home/           # 首页区块 (Hero, Features)
│   └── Common/         # 通用组件 (PixelButton, ThemeToggle, Icon)
├── context/            # React Context
│   └── ThemeContext.tsx
├── data/               # 静态数据 (projects, blogs, skills)
├── styles/             # 全局样式 (pixel.css 像素风格)
└── App.tsx             # 路由配置
```

## 路由

- `/` - 首页
- `/profile` - 个人资料
- `/blogs` - 博客列表
- `/projects` - 项目列表
- `/projects/auto-caption` - Auto Caption 项目详情
- `/projects/light-at` - Light At 项目详情
- `/projects/light-browser` - Light Browser 项目详情

## UnoCSS 配置

自定义配色主题 (theme.colors) 和快捷类 (shortcuts):
- `pixel-btn` - 像素风格按钮
- `section-container` - 内容容器
- 主题色: primary (#CA8A04 及其亮/暗变体)

## 样式

- `src/styles/pixel.css` - 像素风格样式
- `src/styles/variables.css` - CSS 变量
- 字体: Press Start 2P (通过 presetWebFonts 配置)
