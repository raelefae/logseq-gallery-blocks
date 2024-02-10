This is a fork of CorrectRoadH's Logseq Gallery plugin. This gallery plugin works in tandem with the Banners Logseq plugin to make a gallery view of pages using their banners as images.

I'm hoping to achieve something similar, but displaying blocks instead of pages.

Currently a work-in-progress.

This is my first time working with typescript and am honestly a bit in over my head. :)


Below is the original readme:

# Logseq Gallery

## Features
Offering gallery view for result of page query in Logseq. like Notion.

![](./imgs/screenshot-1.png)

## Roadmap
- [] Display Tags under title
- [] Support generate cover from content
- [] Add generate cover from PDF files
- [] Support into editor mode when click the space of gallery

## Usage
```
{{renderer :gallery, <page query>, <title>}}
```
for example
```
{{renderer :gallery, (page-property tag area), Area}}
```

Support property Field
| Function | Field | Example |
| -- | -- | -- |
| Cover | `cover` | `cover:: ../assets/IMG_2694_1706277077580_0.jpeg`  |
| Banner | `banner` | `banner:: ![untitle](../assets/IMG_2694_1706277077580_0.jpeg)`|
| Icon | `icon` | `icon:: 💻` |  

**Note**
`cover` and `banner` are both support `../assets/IMG_2694_1706277077580_0.jpeg`, `![untitle](../assets/IMG_2694_1706277077580_0.jpeg)` and `http(s)://xxx/xxx`.
