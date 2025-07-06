---
title: 信息总览
---

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()

const skills = [
    { title: 'HTML', value: 90, state:'high' },
    { title: 'CSS', value: 75, state:'high' },
    { title: 'JavaScript', value: 70, state:'high' },
    { title: 'TypeScript', value: 80, state:'high' },
    { title: 'Vue', value: 70, state:'high' },
    { title: 'Electron', value: 60, state:'medium' },
    { title: 'Node.js', value: 60, state:'medium' },
    { title: 'Python', value: 70, state:'high' },
    { title: 'C++', value: 50, state:'medium' },
    { title: 'Java', value: 20, state:'low' },
    { title: '英语', value: 75, state:'high' },
    { title: '日语', value: 25, state:'low' },
]
</script>

<style scoped>
.skills {
    columns: 2;
}
.skill {
    border-radius: 5px;
    padding: 5px 15px;
    margin-top: 16px;
    width: 90%;
    margin-left: 5%;
}
.skill:first-child {
    margin-top: 0;
}
.skill span{
    font-size: 0.8em;
}
.skill-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.skill meter {
    width: 100%;
}
.high {
    background:  #95de6418;
}
.high:hover {
    background:  #52c41a24;
}
.medium {
    background:  #ffd66618;
}
.medium:hover {
    background:  #faad1424;
}
.low {
    background:  #ff787518;
}
.low:hover {
    background:  #ff4d4f24;
}
</style>

HiMeditator 是一名软件工程专业的研究生，平时喜欢看电影和股票交易。个人的专业兴趣是前端开发、软件开发和大模型的应用开发。

## 专业技能

<div class="skills">
    <div v-for="skill in skills" :class="['skill', skill.state]">
        <div class="skill-title">
            <span>{{ skill.title }}</span><span>{{ skill.value }}%</span>
        </div>
        <meter min="0" max="100" optimum="100" high="70" low="40" :value="skill.value"></meter>
    </div>
</div>

## GitHub 信息

<div v-if="isDark">
    <img src="https://github-readme-stats.vercel.app/api?username=HiMeditator&show_icons=true&theme=dark" />
</div>
<div v-else>
    <img src="https://github-readme-stats.vercel.app/api?username=HiMeditator&show_icons=true" />
</div>

## GitHub 语言统计

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=HiMeditator&layout=compact" />
