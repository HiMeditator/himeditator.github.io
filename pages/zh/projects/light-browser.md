---
title: Light Browser
---

<div align="center" >
    <img src="/projects/light-browser/light-browser.png" width="90px" height="90px"/>
    <h1 align="center">light-browser</h1>
    <p>一个简单的插件，用于使用默认应用程序打开文件、通过 iframe 在 IDE 中浏览网页。</p>
</div>

## 项目地址

[Github](https://github.com/HiMeditator/light-browser)

## 功能

- 使用默认应用程序打开当前文件
- 使用 `iframe` 打开网页

## 使用方法

![](/projects/light-browser/01.png)

### 使用默认应用程序打开文件

> **注意：** 文件路径中包含特殊字符（如中文字符）的文件目前无法正常打开。

在编辑器或资源管理器区域，右键点击文件并选择 `使用默认方式打开` 以在 IDE 外部使用默认应用程序打开文件。

对于 `html` 文件，您可以在设置中配置浏览器来打开它们。

### 使用 `iframe` 打开网页

> **注意：** 在 IDE 中使用 `iframe` 加载的网页有显著的限制。
>
> - 不能加载本地文件
> - 不能重定向网页
> - 某些网页无法打开
> - 页面缩放可能不合适
> 
> 因此，它只能用于简单的网页浏览，不适合与网页进行交互。

点击状态栏中的 `iBrowser` 项以在 IDE 内打开一个 `iframe` 浏览器窗口。

您可以在设置中配置默认打开的页面地址。

您还可以在设置中选择是否在状态栏中显示 `iBrowser`。

## 设置

搜索 `light browser` 以找到这些设置。

![](/projects/light-browser/02.png)