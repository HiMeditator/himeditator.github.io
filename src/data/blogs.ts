export interface Blog {
  title: string
  url: string
  description: string
  date: string
}

export const blogs: Blog[] = [
  {
    title: '【开发杂谈】用AI玩AI聊天游戏：使用 Electron 和 Python 开发大模型语音聊天软件',
    url: 'https://blog.csdn.net/Hi_KER/article/details/149647797',
    description: '基于 Electron 与 Python，结合阿里云百炼的语音识别、大模型、语音合成模型及 VB‑CABLE 虚拟音频设备，开发了 wfts-ai-chat 项目，实现自动识别 AI 游戏《群星低语》角色语音、生成回复并语音输入游戏的自动游玩功能，还可改造为通用 AI 语音聊天工具。',
    date: '2025-07-25'
  },
  {
    title: '【开发杂谈】Auto Caption：使用 Electron 和 Python 开发实时字幕显示软件',
    url: 'https://blog.csdn.net/Hi_KER/article/details/148928529',
    description: '基于 Electron、Vue3 和 Python 开发了开源实时字幕软件 Auto Caption，借助 PyAudioWPatch 获取系统音频、阿里云 Gummy 模型实现多语言语音转文字与翻译，支持自定义字幕引擎。',
    date: '2025-06-27'
  },
  {
    title: '使用 Vue 开发 VS Code 插件前端页面（下）',
    url: 'https://blog.csdn.net/Hi_KER/article/details/147640591',
    description: '承接上篇，讲解在 monorepo 项目中把 Vue3 构建的 Webview View 页面嵌入 VS Code 插件侧边栏，实现插件与前端的 postMessage 双向通信，并完成插件打包、安装与测试。',
    date: '2025-04-30'
  },
  {
    title: '使用 Vue 开发 VS Code 插件前端页面（上）',
    url: 'https://blog.csdn.net/Hi_KER/article/details/123456787',
    description: '讲解如何用 pnpm 搭建 monorepo 项目，将 VS Code 插件（TypeScript+webpack）与 Vue3 前端子项目整合，完成项目初始化、路径配置与指令调试，实现二者独立运行且构建产物统一存放。',
    date: '2025-04-30'
  },
  {
    title: '基于 Termux 在移动端配置 Ubuntu 系统并搭建工作环境',
    url: 'https://blog.csdn.net/Hi_KER/article/details/147156735',
    description: '本文详细介绍在安卓平板上通过 Termux 搭配 Termux:X11 安装 Xfce4 图形界面，再用 proot-distro 部署 Ubuntu 系统，成功配置 VS Code、LibreOffice 等软件，实现移动端 Linux 办公与开发环境搭建。',
    date: '2025-04-12'
  },
  {
    title: '一个开源的 VS Code 大模型聊天插件：Light-at',
    url: 'https://blog.csdn.net/Hi_KER/article/details/147053561',
    description: '开发了 VS Code 大模型聊天插件 Light-at，支持 KaTeX 数学公式渲染、Ollama 本地与 OpenAI 兼容云端模型、自定义 System Prompt、文件上下文、多语言及聊天管理，采用 Vue3+monorepo 架构开发并已开源上架。',
    date: '2025-04-07'
  },
]
