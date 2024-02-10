This is a fork of CorrectRoadH's Logseq Gallery plugin. This gallery plugin works in tandem with the Banners Logseq plugin to make a gallery view of pages using their banners as images.

I'm hoping to achieve something similar, but displaying blocks instead of pages.

Currently a work-in-progress.

This is my first time working with typescript and am honestly a bit in over my head. :)


Below is the original readme:


# Logseq Gallery

## Features
一个 Logseq 插件，给 page query 的结果提供 Gallery 视图。就像 Notion 一样。

![](./imgs/screenshot-1.png)

## Roadmap
- [] Display Tags under title
- [] Support generate cover from content
- [] Add generate cover from PDF files
- [] Support into editor mode when click the space of gallery
- [] Support support https url image as cover

## 用例
```
{{renderer :gallery, <page query>, <title>}}
```
比如
```
{{renderer :gallery, (page-property tag area), Area}}
```

Support property Field
| Function | Field | Example |
| -- | -- | -- |
| Cover | `cover` | `cover:: ../assets/IMG_2694_1706277077580_0.jpeg`  |
| Banner | `banner` | `banner:: ![untitle](../assets/IMG_2694_1706277077580_0.jpeg)`|
| Icon | `icon` | `icon:: 💻` |  

**注意**
`cover` 和 `banner` 是同时支持 `../assets/IMG_2694_1706277077580_0.jpeg` 和 `![untitle](../assets/IMG_2694_1706277077580_0.jpeg)` 还有 `http(s)://xxx/xxx` 的语法.
