---
title: 信息总览
---

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

HiMeditator 是一名软件工程专业的研究生，研究方向为智能软件工程。个人专业兴趣是前端开发、软件开发和大模型表层应用。

## GitHub 信息

<div v-if="isDark">
    <img src="https://github-readme-stats.vercel.app/api?username=HiMeditator&show_icons=true&theme=dark" />
</div>
<div v-else>
    <img src="https://github-readme-stats.vercel.app/api?username=HiMeditator&show_icons=true" />
</div>

## GitHub 语言统计

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=HiMeditator&layout=compact" />
